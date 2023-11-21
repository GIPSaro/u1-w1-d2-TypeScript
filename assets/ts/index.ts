const sonButton: any = document.getElementById(
  "sonButton"
) as HTMLButtonElement;
const motherButton: any = document.getElementById(
  "motherButton"
) as HTMLButtonElement;

class Wallet {
  protected balance: number;

  constructor(_balance: number) {
    this.balance = _balance;
  }
  deposit(hardly: number) {
    this.balance += hardly;
  }
  withdraw(tooOften: number) {
    if (tooOften > this.balance) {
      console.log("You are poor");
      return;
    } else {
      this.balance -= tooOften;
    }
  }
  myBalance(): number {
    return this.balance;
  }
}
class SonWallet extends Wallet {
  constructor(_balance: number) {
    super(_balance);
  }
}
class MotherWallet extends Wallet {
  constructor(_balance: number) {
    super(_balance);
  }
  addInterest() {
    this.balance += this.balance * -0.1;
  }
}

sonButton.onclick = function () {
  const sonDeposit: any = document.getElementById(
    "sonDeposit"
  ) as HTMLInputElement;
  let parsedSonDeposit = parseFloat(sonDeposit.value);
  if (isNaN(parsedSonDeposit)) {
    parsedSonDeposit = 0;
  }

  const sonWithdraw: any = document.getElementById(
    "sonWithdraw"
  ) as HTMLInputElement;
  let parsedSonWithdraw = parseFloat(sonWithdraw.value);
  if (isNaN(parsedSonWithdraw)) {
    parsedSonWithdraw = 0;
  }

  const sonBalance: any = document.getElementById(
    "sonBalance"
  ) as HTMLInputElement;
  const parseSonBalance = parseFloat(sonBalance.value);

  const sonWallet = new SonWallet(parseSonBalance);
  sonWallet.deposit(parsedSonDeposit);
  sonWallet.withdraw(parsedSonWithdraw);
  sonBalance.value = sonWallet.myBalance();

  sonDeposit.value = "";
  sonWithdraw.value = "";
};

motherButton.onclick = function () {
  const motherDeposit: any = document.getElementById(
    "motherDeposit"
  ) as HTMLInputElement;
  let parsedMotherDeposit = parseFloat(motherDeposit.value);
  if (isNaN(parsedMotherDeposit)) {
    parsedMotherDeposit = 0;
  }

  const motherWithdraw: any = document.getElementById(
    "motherWithdraw"
  ) as HTMLInputElement;
  let parseMotherWithdraw = parseFloat(motherWithdraw.value);
  if (isNaN(parseMotherWithdraw)) {
    parseMotherWithdraw = 0;
  }

  const motherBalance: any = document.getElementById(
    "motherBalance"
  ) as HTMLInputElement;
  const parseMotherBalance = parseFloat(motherBalance.value);

  const motherWallet = new MotherWallet(parseMotherBalance);
  motherWallet.deposit(parsedMotherDeposit);
  motherWallet.withdraw(parseMotherWithdraw);
  motherWallet.addInterest();
  motherBalance.value = motherWallet.myBalance();

  motherDeposit.value = "";
  motherWithdraw.value = "";
};
