var Bee = function() {
  Grub.call(this);
  // this.age = 5;
  // this.color = 'yellow';
  // this.job = 'keep on growing';
};

//inherit food and eat methods from Grub
Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

Bee.prototype.age = 5;

Bee.prototype.color = 'yellow';

Bee.prototype.job = 'keep on growing';

