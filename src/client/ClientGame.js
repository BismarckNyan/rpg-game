import ClientEngine from './ClientEngine';
import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import ClientWorld from './ClientWorld';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });
    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId), this);
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  getWorld() {
    return this.map;
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.map.init();
      this.engine.on('render', (_, time) => {
        this.engine.camera.focusAtGameObject(this.player);
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('left');
        }
      },
      ArrowRight: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('right');
        }
      },
      ArrowUp: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('up');
        }
      },
      ArrowDown: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('down');
        }
      },
    });
  }

  movePlayerToDir(dir) {
    const dirs = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1],
    };
    const { player } = this;
    if (player && player.motionProgress === 1) {
      const canMovie = player.moveByCellCoord(
        dirs[dir][0],
        dirs[dir][1],
        (cell) => cell.findObjectsByType('grass').length,
      );
      if (canMovie) {
        player.setState(dir);
        player.once('motion-stopped', () => player.setState('main'));
      }
    }
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
    }
  }
}

export default ClientGame;
