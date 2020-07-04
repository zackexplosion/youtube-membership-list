import LevelScene from "@/scenes/LevelScene"
import ENEMIES from '@/gamedata/enemies.json'
import Enemy from '@/objects/enemy'
import E0 from '@/prefabs/enemies/E0'
// function eCreater(scene, x, y, text, size) {
//   // const e = new Enemy(scene, x, y, '', '')

//   return e
// }
export default function spawnEnermy (this: LevelScene, count:number) {
  if(!count) count = Phaser.Math.Between(0, 3)

  for(let i = 0; i < count; i++) {
    let eindex = Phaser.Math.Between(0, ENEMIES.length - 1)
    console.log('eindex', eindex)
    const edata = ENEMIES[eindex]

    const enemy = new Enemy(
      this,
      Phaser.Math.Between(10, <number>this.game.config.width),
      -400,
      edata
    )



    // enermy.x = 1920/ 2
    // enermy.y = 1080/ 2
    var movement:any = {
      y: Phaser.Math.Between(enemy.height, <number>this.game.config.height / 2)
    }

    if(enemy.x / 2 < enemy.width) {
      movement.x = (enemy.width / 2) + 10
    }
    this.tweens.add({
      targets: enemy,
      ...movement,
      // x: Phaser.Math.Between(
      //   e.size,
      //   <number>this.game.config.width
      // ),
      // y: Phaser.Math.Between(
      //   e.size,
      //   <number>this.game.config.height / 2
      // ),
      duration: 2000,
      callbackScope: enemy,
      onComplete: (_) => {
        _.targets.forEach(__ => {
          let e: Enemy = <Enemy>__
          e.wakeUp()
        })
      }
    })
  }

}
