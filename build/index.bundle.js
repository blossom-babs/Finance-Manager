/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nconsole.log(\"The very first line: connected\"); // z9HFex3z94$5@Ep\n//    AOS.init();\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n\n    this.userValue = document.getElementById('getUserValue');\n    this.userName = document.getElementById('userName');\n    this.budgetForm = document.getElementById(\"budget-form\");\n    this.budgetName = document.getElementById('budget-name');\n    this.budgetInput = document.getElementById(\"budget-input\");\n    this.budgetWarning = document.getElementById(\"budget-warning\");\n    this.budgetOutput = document.getElementById('budget-output');\n    this.expenseOutput = document.getElementById('expenses-output');\n    this.expenseForm = document.getElementById('expense-form');\n    this.expenseName = document.getElementById('expense-name');\n    this.expenseAmt = document.getElementById('expense-amount');\n    this.expenseWarning = document.getElementById('expense-warning');\n    this.expenseList = document.getElementById('expense-list');\n    this.incomeList = document.getElementById('income-list');\n    this.allList = document.getElementById('all-list');\n    this.balance = document.getElementById('balance-output');\n    this.circleChart = document.getElementById('circle-chart');\n    this.itemList = [];\n    this.itemID = 0;\n    this.budgetList = [];\n    this.budgetID = 0;\n  } // budget | take in income form method\n\n\n  _createClass(UI, [{\n    key: \"submitBudgetForm\",\n    value: function submitBudgetForm() {\n      if (this.budgetName.value === '' || this.budgetInput.value === \"\" || this.budgetInput.value <= 0) {\n        this.budgetWarning.classList.remove(\"d-none\");\n        var self = this;\n        setTimeout(function () {\n          self.budgetWarning.classList.add(\"d-none\");\n        }, 4000);\n      } else {\n        var budgetAmount = Number(this.budgetInput.value);\n        var income = {\n          id: this.budgetID,\n          budgetName: this.budgetName.value,\n          budgetAmount: budgetAmount\n        };\n        this.budgetID++;\n        this.budgetList.push(income);\n        this.addIncome(income);\n        this.ShowBalance();\n        this.budgetInput.value = '';\n        this.budgetName.value = '';\n      }\n    } // add income\n\n  }, {\n    key: \"addIncome\",\n    value: function addIncome(income) {\n      var div = document.createElement('div');\n      div.classList.add('singleton-expenses');\n      div.innerHTML = \"\\n        <h6>\".concat(income.budgetName, \"</h6>\\n    <h6>\").concat(income.budgetAmount, \"</h6>\\n    <a data-id=\").concat(income.id, \"><i class='fas fa-edit edit-inc'></i></a>\\n    <a data-id=\").concat(income.id, \"><i class='fas fa-trash del-inc red'></i></a>\\n        \");\n      this.incomeList.appendChild(div);\n    } // balance method\n\n  }, {\n    key: \"ShowBalance\",\n    value: function ShowBalance() {\n      var expense = this.totalExpense();\n      var income = this.totalIncome();\n      this.balance.innerHTML = income - expense;\n      var thisBalance = Number(this.balance.innerHTML);\n\n      if (thisBalance === 0) {\n        this.balance.classList.remove('red', 'green');\n        this.balance.classList.add('white');\n      } else if (thisBalance < 0) {\n        this.balance.classList.remove('white', 'green');\n        this.balance.classList.add('red');\n      } else if (thisBalance > 0) {\n        this.balance.classList.remove('red', 'white');\n        this.balance.classList.add('green');\n      }\n    } // total income\n\n  }, {\n    key: \"totalIncome\",\n    value: function totalIncome() {\n      var totalInc = 0;\n\n      if (this.budgetList.length > 0) {\n        totalInc = this.budgetList.reduce(function (acc, currval) {\n          acc += currval.budgetAmount;\n          return acc;\n        }, 0);\n      }\n\n      this.budgetOutput.innerHTML = totalInc;\n      return totalInc;\n    } // total expenses\n\n  }, {\n    key: \"totalExpense\",\n    value: function totalExpense() {\n      var total = 0;\n\n      if (this.itemList.length > 0) {\n        total = this.itemList.reduce(function (acc, currval) {\n          acc += currval.amount;\n          return acc;\n        }, 0);\n      }\n\n      this.expenseOutput.innerHTML = total;\n      return total;\n    } // expense form method\n\n  }, {\n    key: \"submitExpenseForm\",\n    value: function submitExpenseForm() {\n      if (this.expenseName.value === '' || this.expenseAmt.value === '' || this.expenseAmt.value <= 0) {\n        this.expenseWarning.classList.remove('d-none');\n        var self = this;\n        setTimeout(function () {\n          self.expenseWarning.classList.add('d-none');\n        }, 4000);\n      } else {\n        var amount = Number(this.expenseAmt.value);\n        var expenseObj = {\n          id: this.itemID,\n          title: this.expenseName.value,\n          amount: amount\n        };\n        this.itemID++;\n        this.itemList.push(expenseObj);\n        this.addExpense(expenseObj);\n        this.ShowBalance();\n        this.expenseName.value = '';\n        this.expenseAmt.value = '';\n      }\n    } // add individual expense \n\n  }, {\n    key: \"addExpense\",\n    value: function addExpense(expenseObj) {\n      var newDiv = document.createElement('div');\n      newDiv.classList.add('singleton-expenses');\n      newDiv.innerHTML = \"\\n        \\n        <h6>\".concat(expenseObj.title, \"</h6>\\n        <h6>\").concat(expenseObj.amount, \"</h6>\\n        <a data-id=\").concat(expenseObj.id, \"><i class=\\\"fas fa-edit edit-exp\\\"></i></a>\\n        <a data-id=\").concat(expenseObj.id, \"><i class=\\\"fas fa-trash delete-exp\\\"></i></a>\\n\\n        \");\n      this.expenseList.appendChild(newDiv);\n    } // edit expense\n\n  }, {\n    key: \"editExpense\",\n    value: function editExpense(element) {\n      var el = element.target.parentElement;\n      var parent = el.parentElement;\n      var id = Number(el.dataset.id);\n      this.expenseList.removeChild(parent);\n      var expense = this.itemList.filter(function (item) {\n        return item.id === id;\n      });\n      this.expenseName.value = expense[0].title;\n      this.expenseAmt.value = expense[0].amount;\n      var tempList = this.itemList.filter(function (item) {\n        return item.id !== id;\n      });\n      this.itemList = tempList;\n      this.ShowBalance();\n    } // edit income\n\n  }, {\n    key: \"editIncome\",\n    value: function editIncome(e) {\n      var editIncomeId = Number(e.target.parentElement.dataset.id);\n      var parent = e.target.parentElement.parentElement;\n      this.incomeList.removeChild(parent);\n      var income = this.budgetList.filter(function (item) {\n        return item.id === editIncomeId;\n      });\n      this.budgetName.value = income[0].budgetName;\n      this.budgetInput.value = income[0].budgetAmount;\n      var tempIncome = this.budgetList.filter(function (item) {\n        return item.id !== editIncomeId;\n      });\n      this.budgetList = tempIncome;\n      this.ShowBalance();\n    } // delete expense\n\n  }, {\n    key: \"deleteExpense\",\n    value: function deleteExpense(element) {\n      var el = element.target.parentElement;\n      var parent = el.parentElement;\n      var id = Number(el.dataset.id);\n      this.expenseList.removeChild(parent);\n      var tempList = this.itemList.filter(function (item) {\n        return item.id !== id;\n      });\n      this.itemList = tempList;\n      this.ShowBalance();\n    } // delete income\n\n  }, {\n    key: \"deleteIncome\",\n    value: function deleteIncome(e) {\n      var editIncomeId = Number(e.target.parentElement.dataset.id);\n      var parent = e.target.parentElement.parentElement;\n      this.incomeList.removeChild(parent);\n      var tempIncome = this.budgetList.filter(function (item) {\n        return item.id !== editIncomeId;\n      });\n      this.budgetList = tempIncome;\n      this.ShowBalance();\n    } //set user name\n\n  }, {\n    key: \"setUserName\",\n    value: function setUserName() {\n      var username = this.userValue.value;\n      this.userName.innerHTML = username;\n      this.userValue.value = '';\n      this.scrollTo();\n    }\n  }, {\n    key: \"scrollTo\",\n    value: function scrollTo() {\n      window.scrollTo(300, 1500);\n    }\n  }]);\n\n  return UI;\n}();\n\nfunction eventListeners() {\n  var budgetForm = document.getElementById(\"budget-form\");\n  var expenseForm = document.getElementById('expense-form');\n  var expenseList = document.getElementById('expense-list');\n  var incomeList = document.getElementById('income-list');\n  var userForm = document.getElementById('getUserName'); // instantiating the ui class\n\n  var ui = new UI(); // working on the budget form\n\n  budgetForm.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    ui.submitBudgetForm();\n  }); // getting the user name\n\n  userForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    ui.setUserName();\n  }); // working on the expense form\n\n  expenseForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    ui.submitExpenseForm();\n  }); // edit and delete expense buttons\n\n  expenseList.addEventListener('click', function (e) {\n    if (e.target.classList.contains('edit-exp')) {\n      ui.editExpense(e);\n    } else if (e.target.classList.contains('delete-exp')) {\n      ui.deleteExpense(e);\n    }\n  }); // edit and delete income\n\n  incomeList.addEventListener('click', function (e) {\n    if (e.target.classList.contains('edit-inc')) {\n      ui.editIncome(e);\n    } else if (e.target.classList.contains('del-inc')) {\n      ui.deleteIncome(e);\n    }\n  });\n} // updateChart(1500, 500)\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  eventListeners();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });