import Player from '@/prefabs/Player'
import E0 from '@/prefabs/enemies/E0'
import E1 from '@/prefabs/enemies/E1'
import E2 from '@/prefabs/enemies/E2'
import E3 from '@/prefabs/enemies/E3'
import E4 from '@/prefabs/enemies/E4'
import E5 from '@/prefabs/enemies/E5'
import E6 from '@/prefabs/enemies/E6'
import E7 from '@/prefabs/enemies/E7'
import E8 from '@/prefabs/enemies/E8'
import E9 from '@/prefabs/enemies/E9'
import E10 from '@/prefabs/enemies/E10'
import E11 from '@/prefabs/enemies/E11'
import E12 from '@/prefabs/enemies/E12'
import E13 from '@/prefabs/enemies/E13'
import E14 from '@/prefabs/enemies/E14'
import E15 from '@/prefabs/enemies/E15'
import E16 from '@/prefabs/enemies/E16'
import E17 from '@/prefabs/enemies/E17'
import E18 from '@/prefabs/enemies/E18'
import E19 from '@/prefabs/enemies/E19'
import E20 from '@/prefabs/enemies/E20'
import E21 from '@/prefabs/enemies/E21'
import E22 from '@/prefabs/enemies/E22'
import E23 from '@/prefabs/enemies/E23'
import E24 from '@/prefabs/enemies/E24'
import E25 from '@/prefabs/enemies/E25'
import E26 from '@/prefabs/enemies/E26'
import E27 from '@/prefabs/enemies/E27'
import E28 from '@/prefabs/enemies/E28'
import E29 from '@/prefabs/enemies/E29'
import E30 from '@/prefabs/enemies/E30'
import E31 from '@/prefabs/enemies/E31'
import E32 from '@/prefabs/enemies/E32'
import E33 from '@/prefabs/enemies/E33'
import E34 from '@/prefabs/enemies/E34'
import E35 from '@/prefabs/enemies/E35'
import E36 from '@/prefabs/enemies/E36'
import E37 from '@/prefabs/enemies/E37'
import E38 from '@/prefabs/enemies/E38'

import Enemy from '@/prefabs/Enemy'
import Level from '@/scenes/LevelScene'
// You can write more code here

/* START OF COMPILED CODE */

class LevelEasy extends Level {
	
	constructor() {
		super("LevelEasy");
	}
	
	_create() {
		
		// player
		const player = new Player(this, 85, 1014);
		this.add.existing(player);
		
		// enemy_2
		const enemy_2 = new Enemy(this, 754, -453);
		this.add.existing(enemy_2);
		
		// e9
		const e9 = new E9(this, 718, 642);
		this.add.existing(e9);
		
		// e15
		const e15 = new E15(this, 1233, 464);
		this.add.existing(e15);
		
		// e20
		const e20 = new E20(this, 244, 487);
		this.add.existing(e20);
		
		// e17
		const e17 = new E17(this, 851, 390);
		this.add.existing(e17);
		
		// e27
		const e27 = new E27(this, 277, 131);
		this.add.existing(e27);
		
		// e28
		const e28 = new E28(this, 1514, 275);
		this.add.existing(e28);
		
		// e8
		const e8 = new E8(this, 1259, 753);
		this.add.existing(e8);
		
		// fields
		this.player = player;
	}
	
	public player: Player;
	
	
	/* START-USER-CODE */

	create() {
		this._create()
		super.create()
	}


	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export default LevelEasy