var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sonButton = document.getElementById("sonButton");
var motherButton = document.getElementById("motherButton");
var Wallet = /** @class */ (function () {
    function Wallet(_balance) {
        this.balance = _balance;
    }
    Wallet.prototype.deposit = function (hardly) {
        this.balance += hardly;
    };
    Wallet.prototype.withdraw = function (tooOften) {
        if (tooOften > this.balance) {
            console.log("You are poor");
            return;
        }
        else {
            this.balance -= tooOften;
        }
    };
    Wallet.prototype.myBalance = function () {
        return this.balance;
    };
    return Wallet;
}());
var SonWallet = /** @class */ (function (_super) {
    __extends(SonWallet, _super);
    function SonWallet(_balance) {
        return _super.call(this, _balance) || this;
    }
    return SonWallet;
}(Wallet));
var MotherWallet = /** @class */ (function (_super) {
    __extends(MotherWallet, _super);
    function MotherWallet(_balance) {
        return _super.call(this, _balance) || this;
    }
    MotherWallet.prototype.addInterest = function () {
        this.balance += this.balance * -0.1;
    };
    return MotherWallet;
}(Wallet));
sonButton.onclick = function () {
    var sonDeposit = document.getElementById("sonDeposit");
    var parsedSonDeposit = parseFloat(sonDeposit.value);
    if (isNaN(parsedSonDeposit)) {
        parsedSonDeposit = 0;
    }
    var sonWithdraw = document.getElementById("sonWithdraw");
    var parsedSonWithdraw = parseFloat(sonWithdraw.value);
    if (isNaN(parsedSonWithdraw)) {
        parsedSonWithdraw = 0;
    }
    var sonBalance = document.getElementById("sonBalance");
    var parseSonBalance = parseFloat(sonBalance.value);
    var sonWallet = new SonWallet(parseSonBalance);
    sonWallet.deposit(parsedSonDeposit);
    sonWallet.withdraw(parsedSonWithdraw);
    sonBalance.value = sonWallet.myBalance();
    sonDeposit.value = "";
    sonWithdraw.value = "";
};
motherButton.onclick = function () {
    var motherDeposit = document.getElementById("motherDeposit");
    var parsedMotherDeposit = parseFloat(motherDeposit.value);
    if (isNaN(parsedMotherDeposit)) {
        parsedMotherDeposit = 0;
    }
    var motherWithdraw = document.getElementById("motherWithdraw");
    var parseMotherWithdraw = parseFloat(motherWithdraw.value);
    if (isNaN(parseMotherWithdraw)) {
        parseMotherWithdraw = 0;
    }
    var motherBalance = document.getElementById("motherBalance");
    var parseMotherBalance = parseFloat(motherBalance.value);
    var motherWallet = new MotherWallet(parseMotherBalance);
    motherWallet.deposit(parsedMotherDeposit);
    motherWallet.withdraw(parseMotherWithdraw);
    motherWallet.addInterest();
    motherBalance.value = motherWallet.myBalance();
    motherDeposit.value = "";
    motherWithdraw.value = "";
};
