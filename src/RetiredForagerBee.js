class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canfly = false;
    this.color = 'grey';
    this.canFly = false;
  }
  forage() {
    return 'I am too old, let me play cards instead'
  }
  gamble(treasure) {
    return this.treasureChest.push(treasure)
  }
};
