class JukeBox {
  CDCollection = [];
  player;

  constructor (CDs, CDPlayer) {
    this.CDCollection = CDs.slice(0);
    this.player = CDPlayer;
  }

  addCDToPlayList(CD) {
    this.player.playCD(CD);
  }

  addSongToPlayList(CD, song) {
    this.player.playSong(CD, song);
  }

  getCurrentPlayList () {

  }
}

class CDPlayer {
  list = [];

  playCD (CD) {

  }

  playSong (CD, song) {

  }

  getCurrentPlayList () {

  }

  play () {

  }
}

class CD {

}

class playlist {

}

class Song {

}