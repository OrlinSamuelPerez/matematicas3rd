import {Howl, Howler} from 'howler';
export const CorrectSound = () =>{
    var sound = new Howl({
        src: ['/Sonido/correcto.mp3']
      });
      
      sound.play();
}
export const IncorrectSound = () =>{
  var sound = new Howl({
      src: ['/Sonido/incorrecto.mp3']
    });
    
    sound.play();
}