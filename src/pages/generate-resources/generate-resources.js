var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpService } from '../../app/http.service';
import { Company } from './../../models/company';
import { GeneralServiceService } from '../../app/general-service.service';
//import { PuzzleTile } from './../../models  /puzzleTile';
/**
 * Generated class for the GenerateResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 
 //Here is the backend of Generate resocurces
 */
var GenerateResourcesPage = /** @class */ (function () {
    //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]                    
    // here is the constructor for the page 
    function GenerateResourcesPage(navCtrl, navParams, httpService, service, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.service = service;
        this.toastController = toastController;
        this.puzzlePieces = [];
        this.puzzle = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.puzzleReward = 0;
        this.comp = new Company("00000000000null", "Null Company", "No image", 0, 0, 0, 0, 0);
        this.image = 'http://35.196.111.251:3000/puzzleImages/black.jpg';
        this.puzzles = [];
        //this are different solvable puzzle orders
        this.solvable_puzzles = [[9, 6, 5, 8, 4, 2, 16, 15, 7, 13, 3, 12, 11, 10, 1, 14],
            [9, 6, 5, 8, 4, 3, 13, 12, 7, 10, 15, 14, 16, 11, 2, 1],
            [10, 6, 12, 11, 16, 14, 4, 2, 9, 8, 3, 5, 13, 1, 15, 7],
            [16, 10, 6, 12, 9, 3, 2, 11, 8, 7, 14, 5, 13, 4, 15, 1],
            [6, 8, 9, 12, 4, 3, 10, 11, 14, 15, 13, 5, 2, 7, 1, 16],
            [6, 3, 8, 12, 4, 9, 5, 10, 2, 16, 14, 11, 7, 13, 15, 1],
            [1, 14, 3, 16, 7, 6, 11, 5, 4, 13, 15, 8, 12, 2, 9, 10],
            [12, 7, 9, 6, 8, 1, 14, 16, 5, 11, 15, 10, 13, 4, 3, 2],
            [7, 8, 6, 5, 12, 9, 4, 15, 14, 16, 1, 3, 13, 2, 11, 10],
            [6, 8, 2, 12, 9, 10, 14, 11, 4, 3, 15, 5, 7, 13, 16, 1],
            [7, 5, 9, 6, 12, 11, 1, 3, 16, 14, 8, 15, 13, 4, 2, 10],
            [10, 3, 16, 12, 4, 11, 6, 1, 9, 8, 2, 7, 13, 15, 5, 14]];
        this.toastCtrl = toastController;
        service.getCurrentUser().then(function (user) {
            _this.user = user;
            if (!(user.companyId == null)) {
                httpService.getCompanyById(user.companyId).subscribe(function (comp) {
                    _this.comp = comp;
                });
            }
        });
    }
    GenerateResourcesPage.prototype.ionViewDidEnter = function () {
        this.getAllPuzzles();
    };
    //this function gets all the puzzles in the database and star to create the puzzle 
    GenerateResourcesPage.prototype.getAllPuzzles = function () {
        var _this = this;
        return this.httpService.getAllPuzzles().subscribe(function (data) {
            var data2 = JSON.parse(JSON.stringify((data)));
            var p = data2.data[_this.randomIntFromInterval(0, data2.data.length - 1)];
            _this.real_puzzle = p;
            _this.initializePuzzle(data2);
            //this.getCompanyById(this.service.user.companyId);
        });
    };
    //this function get the image and distribute this in one of the orders of solvable_puzzles
    GenerateResourcesPage.prototype.initializePuzzle = function (data2) {
        this.puzzles = data2;
        // let image: string;
        // let position = 0;
        console.log(data2);
        console.log("-----------");
        console.log(this.real_puzzle);
        var i;
        var suffle = this.solvable_puzzles[this.randomIntFromInterval(0, this.solvable_puzzles.length)];
        //var suffle = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] ;
        this.puzzleReward = this.real_puzzle.rewarded_resources;
        //Filles the array with the slices
        for (i = 0; i < 15; i++) {
            var imgSrc = this.real_puzzle.slicedImage[i];
            this.puzzlePieces.push(imgSrc);
            console.log('here i am' + this.puzzlePieces[i]);
        }
        this.puzzlePieces.push(this.image);
        console.log("...............");
        console.log(this.puzzlePieces);
        console.log("...............");
        this.puzzleReward = 10;
        var k = 0;
        console.log('_______________________________________');
        for (i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                this.puzzle[i][j] = suffle[k];
                console.log('i: ' + i + ' j: ' + j);
                console.log(this.puzzlePieces[k]);
                k++;
            }
        }
        console.log(this.puzzle);
        console.log("...............");
    };
    GenerateResourcesPage.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GenerateResourcesPage.prototype.try = function () {
        //this.puzzleClass = new Puzzle()
    };
    GenerateResourcesPage.prototype.selectPuzzle = function () {
        //console.log(this.comp)
    };
    //this function give the resources to the company when the puzzle is right 
    GenerateResourcesPage.prototype.sendPuzzle = function () {
        var _this = this;
        if (this.isOrdered()) {
            var c = this.comp;
            c.companyResource = c.companyResource + this.real_puzzle.rewarded_resources;
            console.log('resources = ' + c.companyResource);
            this.httpService.updateCompany(c, c.id).subscribe(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Right answer, you got ' + _this.real_puzzle.rewarded_resources + ' of k!',
                    duration: 3000
                    //a messege is print if successfull
                });
                toast.present();
            }, function () {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000
                    //a messege is print if not successfull
                });
                toast.present();
            });
            ;
            //alert('Right answer, you got ' + this.real_puzzle.rewarded_resources +' of k!');
        }
        else {
            alert("Wrong answer");
        }
    };
    //this function move the image in the puzzle 
    GenerateResourcesPage.prototype.movePiece = function (row, col) {
        if (this.isAdjacent(row, col)) {
            console.log('Piece moved ' + 'Row: ' + row + ' Col: ' + col);
            console.log(this.puzzlePieces[this.puzzle[row][col]]);
        }
        //alert(r.toString());
        //alert(row.toString().concat(col.toString()));
    };
    //this function checks the order of the puzzle an return a boolean if it is right or wrong 
    GenerateResourcesPage.prototype.isOrdered = function () {
        var order = 1;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (!(this.puzzle[i][j] === order)) {
                    //alert("returned at".concat(order.toString()));
                    return false;
                }
                order++;
            }
        }
        return true;
    };
    //Checks if the tile is adjacent to the black tile, if so returns true and calls for a swapp
    GenerateResourcesPage.prototype.isAdjacent = function (row, col) {
        console.log('Piece moved ' + 'Row: ' + row + ' Col: ' + col);
        console.log(this.puzzlePieces[(this.puzzle[row][col])]);
        //list of ifs that check for adjacency
        if (row < 3 && col < 3 && row > 0 && col > 0) {
            if (this.puzzle[row + 1][col] === 16) {
                this.swappPiece(row, col, row + 1, col);
                return true;
            }
            if (this.puzzle[row][col + 1] === 16) {
                this.swappPiece(row, col, row, col + 1);
                return true;
            }
            if (this.puzzle[row - 1][col] === 16) {
                this.swappPiece(row, col, row - 1, col);
                return true;
            }
            if (this.puzzle[row][col - 1] === 16) {
                this.swappPiece(row, col, row, col - 1);
                return true;
            }
        }
        if ((row === 3 || row === 0) && (col < 3 && col > 0)) {
            if (this.puzzle[row][col + 1] === 16) {
                this.swappPiece(row, col, row, col + 1);
                return true;
            }
            if (this.puzzle[row][col - 1] === 16) {
                this.swappPiece(row, col, row, col - 1);
                return true;
            }
            if (row === 3 && col > 0 && col < 3) {
                if (this.puzzle[row - 1][col] === 16) {
                    this.swappPiece(row, col, row - 1, col);
                    return true;
                }
                if (this.puzzle[row][col + 1] === 16) {
                    this.swappPiece(row, col, row, col + 1);
                    return true;
                }
                if (this.puzzle[row][col - 1] === 16) {
                    this.swappPiece(row, col, row, col - 1);
                    return true;
                }
            }
            if (row === 0 && col > 0 && col < 3) {
                if (this.puzzle[row + 1][col] === 16) {
                    this.swappPiece(row, col, row + 1, col);
                    return true;
                }
                if (this.puzzle[row][col + 1] === 16) {
                    this.swappPiece(row, col, row, col + 1);
                    return true;
                }
                if (this.puzzle[row][col - 1] === 16) {
                    this.swappPiece(row, col, row, col - 1);
                    return true;
                }
            }
        }
        if ((row < 3 && row > 0) && (col === 3 || col === 0)) {
            if (this.puzzle[row + 1][col] === 16) {
                this.swappPiece(row, col, row + 1, col);
                return true;
            }
            if (this.puzzle[row - 1][col] === 16) {
                this.swappPiece(row, col, row - 1, col);
                return true;
            }
            if (row < 3 && col === 3 && row > 0) {
                if (this.puzzle[row][col - 1] === 16) {
                    this.swappPiece(row, col, row, col - 1);
                    return true;
                }
                if (this.puzzle[row + 1][col] === 16) {
                    this.swappPiece(row, col, row + 1, col);
                    return true;
                }
                if (this.puzzle[row - 1][col] === 16) {
                    this.swappPiece(row, col, row - 1, col);
                    return true;
                }
            }
            if (row < 3 && col === 0 && row > 0) {
                if (this.puzzle[row][col + 1] === 16) {
                    this.swappPiece(row, col, row, col + 1);
                    return true;
                }
                if (this.puzzle[row + 1][col] === 16) {
                    this.swappPiece(row, col, row + 1, col);
                    return true;
                }
                if (this.puzzle[row - 1][col] === 16) {
                    this.swappPiece(row, col, row - 1, col);
                    return true;
                }
            }
        }
        if ((row === 3 || row === 0) && col === 0) {
            if (this.puzzle[row][col + 1] === 16) {
                this.swappPiece(row, col, row, col + 1);
                return true;
            }
            if (row === 3) {
                if (this.puzzle[row - 1][col] === 16) {
                    this.swappPiece(row, col, row - 1, col);
                    return true;
                }
            }
            if (row === 0) {
                if (this.puzzle[row + 1][col] === 16) {
                    this.swappPiece(row, col, row + 1, col);
                    return true;
                }
            }
        }
        if ((row === 3 || row === 0) && col === 3) {
            if (this.puzzle[row][col - 1] === 16) {
                this.swappPiece(row, col, row, col - 1);
                return true;
            }
            if (row === 3) {
                if (this.puzzle[row - 1][col] === 16) {
                    this.swappPiece(row, col, row - 1, col);
                    return true;
                }
            }
            if (row === 0) {
                if (this.puzzle[row + 1][col] === 16) {
                    this.swappPiece(row, col, row + 1, col);
                    return true;
                }
            }
        }
        return false;
    };
    //Here the tiles are swapped
    GenerateResourcesPage.prototype.swappPiece = function (a_row, a_col, n_row, n_col) {
        var temp = this.puzzle[a_row][a_col];
        this.puzzle[a_row][a_col] = this.puzzle[n_row][n_col];
        this.puzzle[n_row][n_col] = temp;
    };
    GenerateResourcesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-generate-resources',
            templateUrl: 'generate-resources.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService,
            GeneralServiceService,
            ToastController])
    ], GenerateResourcesPage);
    return GenerateResourcesPage;
}());
export { GenerateResourcesPage };
//# sourceMappingURL=generate-resources.js.map