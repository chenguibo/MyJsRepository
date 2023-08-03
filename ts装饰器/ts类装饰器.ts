/*
 * @Author: cgb
 * @Date: 2023-08-02 16:43:54
 * @LastEditTime: 2023-08-03 08:32:56
 * @LastEditors: cgb
 * @Description: 
 * @FilePath: \MyJsRepository\ts装饰器.ts
 */

// ClassDecorator类装饰器
const deco:ClassDecorator = (target:Function) => {
  target.prototype.getPosition = () => {
    return {x:100,y:200}
  }
}

const MusicDeco:ClassDecorator = (target:Function) => {
  target.prototype.playMusic = () => {
    console.log('播放音乐');   
  }
}

// 装饰器可以当做一个公用方法来调用
const MessageDeco: ClassDecorator = (target: Function) => {
  target.prototype.message = (content:string) => {
    console.log(content);   
  }
}

// 装饰器工厂。输入类别，返回相应的装饰器。
const EatDecoFactory = (type: string): ClassDecorator => {
  let thing = '吃饭';
  switch (type) {
    case 'human': thing = '吃饭'; break;
    case 'dog': thing = '吃骨头'; break;
    default: thing = '吃饭'; break;
  }
  return (target: Function) => {
    target.prototype.eatThings = () => {
      console.log(thing);   
    }
  }
}

// 1、@deco是一种语法糖。效果等价于deco(Hd)。
// 2、装饰器叠加。@deco和@MusicDeco。
@deco
@MusicDeco
@MessageDeco
@EatDecoFactory('human')
class Hd {
  public getPosition() { }
  public playMusic() { }
  public getMessage() {
    this.message('我获得信息了1！');
  }
  public eatThings() { }
}

@MessageDeco
@EatDecoFactory('dog')
class Ccc {
  public getMessage() {
    this.message('我获得信息了2！');
  }
  public eatThings() { }
}

const cc = new Hd();
console.log(cc.getPosition()); // { x: 100, y: 200 }。效果是重写了一遍getPosition方法。
cc.playMusic(); // 播放音乐
cc.getMessage(); // 我获得信息了1！
cc.eatThings(); // 吃饭

const dd = new Ccc();
dd.getMessage(); // 我获得信息了2！
dd.eatThings(); // 吃骨头


