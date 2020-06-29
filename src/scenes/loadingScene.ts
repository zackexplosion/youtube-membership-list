const START_SCENE = 'menuScene'
// const START_SCENE = 'TestScene'
import LoadingBar from '@/objects/loadingBar'

export default class LoadingScene extends Phaser.Scene {
  music
  private loadingBar: LoadingBar
  constructor() {
    super({ key: 'PreloadScene' })
  }

  init(config): void {
    // console.log(config)
  }

  preload(): void {
    this.loadingBar = new LoadingBar({ scene: this })

    this.load.on('progress', (e) => {
      this.loadingBar.setPer(e)
    })

    this.load.image('player', 'assets/zack2_80.png')
    this.load.image('playerBullet', 'assets/bullet.png')
    this.load.image('ebulletA', 'assets/ebullet_a.png')
    this.load.image('ebulletB', 'assets/ebullet_b.png')
    this.load.image('hand-click', 'assets/hand-click.png')

    this.load.audio('playerFireSFX', 'assets/sfx_laserfire.ogg')
    this.load.audio('playerDie', 'assets/player_die.mp3')
    this.load.audio('explosion', 'assets/player_hitten.mp3')
    this.load.audio('menu-selection', 'assets/audios/menu-selection.wav')
    this.load.audio('menu-bgm', 'assets/audios/menu-bgm.mp3')
    // this.load.audio('playerFireSFX', 'assets/laser.ogg')
    // loading music
    const { key, showSponsorsAt, endShowSponsorAt } = window.model.currentMusic
    this.load.audio('music', 'assets/' + key, {
      showSponsorsAt,
      endShowSponsorAt,
    })

    this.sound.pauseOnBlur = false

    // create rounded profile images
    // for (let i = 0; i < memeberList.length; i++) {
    //   const [channelId, name, memberSince] = memeberList[i]
    //   const key = 'memberProfile_' + i
    //   this.load.image(key, `assets/member-profile-images/${channelId}.jpg`)
    // }
  }

  create(): void {
    this.loadingBar.setVisible(false)

    const rotateNotice = this.add.text(
      <number>this.game.config.width / 2,
      <number>this.game.config.height / 2,
      "請把手機轉橫 :D",
      {
        fontSize: 120
      }
    )
      .setOrigin(0.5)
      .setVisible(false)

    const handClick = this.add.image(
      <number>this.game.config.width / 2,
      <number>this.game.config.height / 2,
      'hand-click'
    )
      .setInteractive()
      .on('pointerup', () => {
        if (!this.scale.isFullscreen) {
          this.scale.startFullscreen()
        }

        this.scene.start(START_SCENE)
      })


    this.tweens.add({
      targets: handClick,
      y: 500,
      duration: 300,
      loop: -1,
      yoyo: true
    })

    // check devise orientation on not desktop device
    if (!this.game.device.os.desktop && this.scale.orientation == Phaser.Scale.Orientation.PORTRAIT) {
      handClick.setVisible(false)
      rotateNotice.setVisible(true)
    }

    this.game.scale.on('orientationchange', (orientation: Phaser.Scale.Orientation) => {
      if (orientation === Phaser.Scale.Orientation.LANDSCAPE) {
        handClick.setVisible(true)
        rotateNotice.setVisible(false)
      } else {
        handClick.setVisible(false)
        rotateNotice.setVisible(true)
      }
    })


  }
}
