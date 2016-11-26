
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Box=laya.ui.Box,Handler=laya.utils.Handler,Image=laya.ui.Image;
	var List=laya.ui.List,Sprite=laya.display.Sprite,Stage=laya.display.Stage,Stat=laya.utils.Stat,Text=laya.display.Text;
	var WebGL=laya.webgl.WebGL;
	//class PerformanceTest_Cartoon2
	var PerformanceTest_Cartoon2=(function(){
		var Character;
		function PerformanceTest_Cartoon2(){
			this.amount=500;
			this.character1=[
			"../../../../res/cartoon2/yd-6_01.png",
			"../../../../res/cartoon2/yd-6_02.png",
			"../../../../res/cartoon2/yd-6_03.png",
			"../../../../res/cartoon2/yd-6_04.png",
			"../../../../res/cartoon2/yd-6_05.png",
			"../../../../res/cartoon2/yd-6_06.png",
			"../../../../res/cartoon2/yd-6_07.png",
			"../../../../res/cartoon2/yd-6_08.png",];
			this.character2=[
			"../../../../res/cartoon2/yd-3_01.png",
			"../../../../res/cartoon2/yd-3_02.png",
			"../../../../res/cartoon2/yd-3_03.png",
			"../../../../res/cartoon2/yd-3_04.png",
			"../../../../res/cartoon2/yd-3_05.png",
			"../../../../res/cartoon2/yd-3_06.png",
			"../../../../res/cartoon2/yd-3_07.png",
			"../../../../res/cartoon2/yd-3_08.png",];
			this.character3=[
			"../../../../res/cartoon2/yd-2_01.png",
			"../../../../res/cartoon2/yd-2_02.png",
			"../../../../res/cartoon2/yd-2_03.png",
			"../../../../res/cartoon2/yd-2_04.png",
			"../../../../res/cartoon2/yd-2_05.png",
			"../../../../res/cartoon2/yd-2_06.png",
			"../../../../res/cartoon2/yd-2_07.png",
			"../../../../res/cartoon2/yd-2_08.png",];
			this.character4=[
			"../../../../res/cartoon2/wyd-1_01.png",
			"../../../../res/cartoon2/wyd-1_02.png",
			"../../../../res/cartoon2/wyd-1_03.png",
			"../../../../res/cartoon2/wyd-1_04.png",
			"../../../../res/cartoon2/wyd-1_05.png",
			"../../../../res/cartoon2/wyd-1_06.png",
			"../../../../res/cartoon2/wyd-1_07.png",
			"../../../../res/cartoon2/wyd-1_08.png",];
			this.characterSkins=[this.character1,this.character2,this.character3,this.character4];
			this.characters=[];
			this.text=null;
			Laya.init(1280,720,WebGL);
			Laya.stage.screenMode="horizontal";
			Stat.enable();
			Laya.stage.loadImage("../../../../res/cartoon2/background.jpg",0,0,1280,900);
			this.createCharacters();
			this.text=new Text();
			this.text.zOrder=10000;
			this.text.fontSize=60;
			this.text.color="#ff0000"
			Laya.stage.addChild(this.text);
			Laya.timer.frameLoop(1,this,this.gameLoop);
		}

		__class(PerformanceTest_Cartoon2,'PerformanceTest_Cartoon2');
		var __proto=PerformanceTest_Cartoon2.prototype;
		__proto.createCharacters=function(){
			var char;
			var charSkin;
			for (var i=0;i < this.amount;i++){
				charSkin=this.characterSkins[Math.floor(Math.random()*this.characterSkins.length)];
				char=new Character(charSkin);
				char.x=Math.random()*(Laya.stage.width+110 *2);
				char.y=Math.random()*(Laya.stage.height-110);
				char.zOrder=char.y;
				char.setSpeed(Math.floor(Math.random()*2+3));
				char.setName(i.toString());
				Laya.stage.addChild(char);
				this.characters.push(char);
			}
		}

		__proto.gameLoop=function(){
			for (var i=this.characters.length-1;i >=0;i--){
				this.characters[i].update();
			}
			if (Laya.timer.currFrame % 60===0){
				this.text.text=Stat.FPS.toString();
			}
		}

		PerformanceTest_Cartoon2.__init$=function(){
			//class Character extends laya.display.Sprite
			Character=(function(_super){
				function Character(images){
					this.speed=5;
					this.bloodBar=null;
					this.animation=null;
					this.nameLabel=null;
					Character.__super.call(this);
					this.createAnimation(images);
					this.createBloodBar();
					this.createNameLabel();
				}
				__class(Character,'',_super);
				var __proto=Character.prototype;
				__proto.createAnimation=function(images){
					this.animation=new Animation();
					this.animation.loadImages(images);
					this.animation.interval=70;
					this.animation.play(0);
					this.addChild(this.animation);
				}
				__proto.createBloodBar=function(){
					this.bloodBar=new Sprite();
					this.bloodBar.loadImage("../../../../res/cartoon2/blood_1_r.png");
					this.bloodBar.x=20;
					this.addChild(this.bloodBar);
				}
				__proto.createNameLabel=function(){
					this.nameLabel=new Text();
					this.nameLabel.color="#FFFFFF";
					this.nameLabel.text="Default";
					this.nameLabel.fontSize=13;
					this.nameLabel.width=110;
					this.nameLabel.align="center";
					this.addChild(this.nameLabel);
				}
				__proto.setSpeed=function(value){
					this.speed=value;
				}
				__proto.setName=function(value){
					this.nameLabel.text=value;
				}
				__proto.update=function(){
					this.x+=this.speed;
					if (this.x >=Laya.stage.width+110)
						this.x=-110;
				}
				Character.WIDTH=110;
				Character.HEIGHT=110;
				return Character;
			})(Sprite)
		}

		return PerformanceTest_Cartoon2;
	})()


	//class UI_List
	var UI_List=(function(){
		var Item;
		function UI_List(){
			Laya.init(800,600,WebGL);
			Laya.stage.alignV="middle";
			Laya.stage.alignH="center";
			Laya.stage.scaleMode="showall";
			Laya.stage.bgColor="#232628";
			this.setup();
		}

		__class(UI_List,'UI_List');
		var __proto=UI_List.prototype;
		__proto.setup=function(){
			var list=new List();
			list.itemRender=Item;
			list.repeatX=1;
			list.repeatY=4;
			list.x=(Laya.stage.width-Item.WID)/ 2;
			list.y=(Laya.stage.height-Item.HEI *list.repeatY)/ 2;
			list.vScrollBarSkin="";
			list.selectEnable=true;
			list.selectHandler=new Handler(this,this.onSelect);
			list.renderHandler=new Handler(this,this.updateItem);
			Laya.stage.addChild(list);
			var data=[];
			for (var i=0;i < 10;++i){
				data.push("../../../../res/ui/listskins/1.jpg");
				data.push("../../../../res/ui/listskins/2.jpg");
				data.push("../../../../res/ui/listskins/3.jpg");
				data.push("../../../../res/ui/listskins/4.jpg");
				data.push("../../../../res/ui/listskins/5.jpg");
			}
			list.array=data;
		}

		__proto.updateItem=function(cell,index){
			cell.setImg(cell.dataSource);
		}

		__proto.onSelect=function(index){
			console.log("当前选择的索引："+index);
		}

		UI_List.__init$=function(){
			//class Item extends laya.ui.Box
			Item=(function(_super){
				function Item(){
					this.img=null;
					Item.__super.call(this);
					this.size(Item.WID,Item.HEI);
					this.img=new Image();
					this.addChild(this.img);
				}
				__class(Item,'',_super);
				var __proto=Item.prototype;
				__proto.setImg=function(src){
					this.img.skin=src;
				}
				Item.WID=373;
				Item.HEI=85;
				return Item;
			})(Box)
		}

		return UI_List;
	})()


	Laya.__init([PerformanceTest_Cartoon2,UI_List]);
	new PerformanceTest_Cartoon2();

})(window,document,Laya);