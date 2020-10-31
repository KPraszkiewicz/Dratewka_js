//kier[N,E,S,W]
const DANE = [
    [
        new _Lokacja("You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", [0, 1, 0, 0], []),
        new _Lokacja("You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", [0, 1, 0, 1], []),
        new _Lokacja("A hill", "13.gif", "rgb(117,237,243)", [0, 1, 1, 1], [new _Pdmt(31, "a STONE", 1, "STONE")]),
        new _Lokacja("Some bushes", "14.gif", "rgb(202,230,51)", [0, 1, 0, 1], []),
        new _Lokacja("An old deserted hut", "15.gif", "rgb(220,204,61)", [0, 1, 0, 1], [new _Pdmt(27, "a BUCKET", 1, "BUCKET")]),
        new _Lokacja("The edge of a forest", "16.gif", "rgb(167,245,63)", [0, 1, 0, 1], []),
        new _Lokacja("A dark forest", "17.gif", "rgb(140,253,99)", [0, 0, 1, 1], [new _Pdmt(14, "MUSHROOMS", 1, "MUSHROOMS")])
    ],
    [
        new _Lokacja("A man nearby making tar", "21.gif", "rgb(255,190,99)", [0, 1, 1, 0], []),
        new _Lokacja("A timber yard", "22.gif", "rgb(255,190,99)", [0, 1, 1, 1], []),
        new _Lokacja("You are by a roadside shrine", "23.gif", "rgb(167,245,63)", [1, 1, 1, 1], [new _Pdmt(10, "a KEY", 1, "KEY")]),
        new _Lokacja("You are by a small chapel", "24.gif", "rgb(212,229,36)", [0, 1, 0, 1], []),
        new _Lokacja("You are on a road leading to a wood", "25.gif", "rgb(167,245,63)", [0, 1, 1, 1], []),
        new _Lokacja("You are in a forest", "26.gif", "rgb(167,245,63)", [0, 1, 0, 1], []),
        new _Lokacja("You are in a deep forest", "27.gif", "rgb(140,253,99)", [1, 0, 0, 1], [new _Pdmt(18, "BERRIES", 1, "BERRIES")])
    ],
    [
        new _Lokacja("You are by the Vistula River", "31.gif", "rgb(122,232,252)", [1, 1, 0, 0], []),
        new _Lokacja("You are by the Vistula River", "32.gif", "rgb(140,214,255)", [1, 0, 0, 1], [new _Pdmt(32, "a FISH", 1, "FISH")]),
        new _Lokacja("You are on a bridge over river", "33.gif", "rgb(108,181,242)", [1, 0, 1, 0], []),
        new _Lokacja("You are by the old tavern", "34.gif", "rgb(255,189,117)", [0, 1, 0, 0], []),
        new _Lokacja("You are at the town's end", "35.gif", "rgb(255,190,99)", [1, 0, 1, 1], []),
        new _Lokacja("You are in a butcher's shop", "36.gif", "rgb(255,188,102)", [0, 0, 1, 0], []),
        new _Lokacja("You are in a cooper's house", "37.gif", "rgb(255,188,102)", [0, 0, 1, 0], [])
    ],
    [
        new _Lokacja("You are in the Wawel Castle", "41.gif", "rgb(255,176,141)", [0, 1, 0, 0], []),
        new _Lokacja("You are inside a dragon's cave", "42.gif", "rgb(198,205,193)", [0, 1, 0, 1], []),
        new _Lokacja("A perfect place to set a trap", "43.gif", "rgb(255,176,141)", [1, 0, 0, 1], []),
        new _Lokacja("You are by the water mill", "44.gif", "rgb(255,190,99)", [0, 1, 0, 0], [new _Pdmt(21, "a BAG", 1, "BAG")]),
        new _Lokacja("You are at a main crossroad", "45.gif", "rgb(255,190,99)", [1, 1, 1, 1], []),
        new _Lokacja("You are on a town street", "46.gif", "rgb(255,190,99)", [1, 1, 0, 1], []),
        new _Lokacja("You are in a frontyard of your house", "47.gif", "rgb(255,190,99)", [1, 0, 1, 1], [])
    ],
    [
        new _Lokacja("", "", "", [1, 1, 1, 1], []),
        new _Lokacja("", "", "", [1, 1, 1, 1], []),
        new _Lokacja("", "", "", [1, 1, 1, 1], []),
        new _Lokacja("You are by a swift stream", "54.gif", "rgb(108,181,242)", [0, 1, 0, 0], []),
        new _Lokacja("You are on a street leading forest", "55.gif", "rgb(255,190,99)", [1, 0, 1, 1], [new _Pdmt(33, "a KNIFE", 1, "KNIFE")]),
        new _Lokacja("You are in a woodcutter's backyard", "56.gif", "rgb(255,190,99)", [0, 0, 1, 0], []),
        new _Lokacja("You are in a shoemaker's house", "57.gif", "rgb(254,194,97)", [1, 0, 0, 0], [])
    ],
    [
        new _Lokacja("", "", "", [1, 1, 1, 1], []),
        new _Lokacja("", "", "", [1, 1, 1, 1], []),
        new _Lokacja("", "", "", [1, 1, 1, 1], []),
        new _Lokacja("You are in a bleak funeral house", "64.gif", "rgb(254,194,97)", [0, 1, 0, 0], [new _Pdmt(24, "a SPADE", 1, "SPADE")]),
        new _Lokacja("You are on a path leading to the wood", "65.gif", "rgb(167,245,63)", [1, 1, 0, 1], []),
        new _Lokacja("You are at the edge of a forest", "66.gif", "rgb(167,245,63)", [1, 1, 0, 1], []),
        new _Lokacja("You are in a deep forest", "67.gif", "rgb(140,253,99)", [0, 0, 0, 1], []),
    ]
]
const OK = true
const ZAL = {
    "10": new _Warunek("10", "56", "11", "You opened a tool shed and took an axe"),
    "11": new _Warunek("11", "67", "12", "You cut sticks for sheeplegs"),
    "12": new _Warunek("12", "43", "13", "You prepared legs for your fake sheep", OK),
    "14": new _Warunek("14", "34", "15", "The tavern owner paid you money"),
    "15": new _Warunek("15", "37", "16", "The cooper sold you a new barrel"),
    "16": new _Warunek("16", "43", "17", "You made a nice sheeptrunk", OK),
    "18": new _Warunek("18", "36", "19", "The butcher gave you wool"),
    "19": new _Warunek("19", "43", "20", "You prepared skin for your fake sheep", OK),
    "21": new _Warunek("21", "57", "22", "You used your tools to make a rag"),
    "22": new _Warunek("22", "43", "23", "You made a fake sheephead", OK),
    "24": new _Warunek("24", "11", "25", "You are digging... (timeout) and digging... (timeout) That's enough sulphur for you", false, 1),
    "25": new _Warunek("25", "43", "26", "You prepared a solid poison", OK),
    "27": new _Warunek("27", "21", "28", "You got a bucket full of tar"),
    "28": new _Warunek("28", "43", "29", "You prepared a liquid poison", OK),
    "00": new _Warunek("00", "43", "37", "Your fake sheep is full of poison and ready to be eaten by the dragon"),
    "37": new _Warunek("37", "43", "30", "The dragon noticed your gift... (timeout) The dragon ate your sheep and died!" /*- podmiana grafiki na lokacji (martwy smok)!*/, false, 2),
    "33": new _Warunek("33", "43" /*+ zabity smok*/, "34", "You cut a piece of dragon's skin", false, 3),
    "34": new _Warunek("34", "57", "35", "You used your tools to make shoes"),
    "35": new _Warunek("35", "41", "36", "The King is impressed by your shoes"),
    "36": new _Warunek("36", "00", "00", "", false, 4),
};
const PDMTY = {
    "10": new _Pdmt(10, "a KEY", 1, "KEY"),
    "11": new _Pdmt(11, "an AXE", 1, "AXE"),
    "12": new _Pdmt(12, "STICKS", 1, "STICKS"),
    "13": new _Pdmt(13, "sheeplegs", 0, "sheeplegs"),
    "14": new _Pdmt(14, "MUSHROOMS", 1, "MUSHROOMS"),
    "15": new _Pdmt(15, "MONEY", 1, "MONEY"),
    "16": new _Pdmt(16, "a BARREL", 1, "BARREL"),
    "17": new _Pdmt(17, "a sheeptrunk", 0, "sheeptrunk"),
    "18": new _Pdmt(18, "BERRIES", 1, "BERRIES"),
    "19": new _Pdmt(19, "WOOL", 1, "WOOL"),
    "20": new _Pdmt(20, "a sheepskin", 0, "sheepskin"),
    "21": new _Pdmt(21, "a BAG", 1, "BAG"),
    "22": new _Pdmt(22, "a RAG", 1, "RAG"),
    "23": new _Pdmt(23, "a sheephead", 0, "sheephead"),
    "24": new _Pdmt(24, "a SPADE", 1, "SPADE"),
    "25": new _Pdmt(25, "SULPHUR", 1, "SULPHUR"),
    "26": new _Pdmt(26, "a solid poison", 0, "solid poison"),
    "27": new _Pdmt(27, "a BUCKET", 1, "BUCKET"),
    "28": new _Pdmt(28, "TAR", 1, "TAR"),
    "29": new _Pdmt(29, "a liquid poison", 0, "liquid poison"),
    "30": new _Pdmt(30, "a dead dragon", 0, "dead dragon"),
    "31": new _Pdmt(31, "a STONE", 1, "STONE"),
    "32": new _Pdmt(32, "a FISH", 1, "FISH"),
    "33": new _Pdmt(33, "a KNIFE", 1, "KNIFE"),
    "34": new _Pdmt(34, "a DRAGONSKIN", 1, "DRAGONSKIN"),
    "35": new _Pdmt(35, "a dragonskin SHOES", 1, "SHOES"),
    "36": new _Pdmt(36, "a PRIZE", 1, "PRIZE"),
    "37": new _Pdmt(37, "a SHEEP", 1, "SHEEP"),
}
const OBR_SRC = "dane/img/"
const KIERUNKI = ["NORTH", "EAST", "SOUTH", "WEST"]
var zabitySmok = false
var kamienieMilowe = 0
var caps = true;
/*
PRZEDMIOTY:
id_przedmiotu, przedmiot_w_odmianie, **flaga 1/0 (1 - można położyć/podnieść/użyć itp., 0 - cały czas na lokacji, brak interakcji), nazwa_przedmiotu

10 - a KEY,1,KEY
11 - an AXE,1,AXE
12 - STICKS,1,STICKS
13 - sheeplegs,0,sheeplegs
14 - MUSHROOMS,1,MUSHROOMS
15 - MONEY,1,MONEY
16 - a BARREL,1,BARREL
17 - a sheeptrunk,0,sheeptrunk
18 - BERRIES,1,BERRIES
19 - WOOL,1,WOOL
20 - a sheepskin,0,sheepskin
21 - a BAG,1,BAG
22 - a RAG,1,RAG
23 - a sheephead,0,sheephead
24 - a SPADE,1,SPADE
25 - SULPHUR,1,SULPHUR
26 - a solid poison,0,solid poison
27 - a BUCKET,1,BUCKET
28 - TAR,1,TAR
29 - a liquid poison,0,liquid poison
30 - a dead dragon,0,dead dragon
31 - a STONE,1,STONE
32 - a FISH,1,FISH
33 - a KNIFE,1,KNIFE
34 - a DRAGONSKIN,1,DRAGONSKIN
35 - a dragonskin SHOES,1,SHOES
36 - a PRIZE,1,PRIZE
37 - a SHEEP,1,SHEEP
*/

function _Lokacja(/*x,y,*/nazwa, obr, kolor, kier, pdmt) {
    //this.x = x
    //this.y = y
    this.nazwa = nazwa
    this.obr = obr
    this.kolor = kolor
    this.kier = kier
    this.pdmt = pdmt
    this.init = function () {
        document.getElementById("nazwa").innerText = this.nazwa

        var el = document.getElementById("obr")
        el.src = OBR_SRC + this.obr
        el.style.backgroundColor = this.kolor

        el = document.getElementById("kier")
        el.innerText = "You can go "
        for (let i = 0; i < 4; i++)
            if (this.kier[i]) {
                el.innerText += " " + KIERUNKI[i] + ","
                document.getElementById("kompas").children[i + 1].style.display = ""
            }
            else
                document.getElementById("kompas").children[i + 1].style.display = "none"

        el.innerText = el.innerText.substr(0, el.innerText.length - 1)
        el = document.getElementById("widoki")
        el.innerText = "You see"
        if (this.pdmt.length > 0) {
            for (let i = 0; i < this.pdmt.length; i++)
                el.innerText += " " + this.pdmt[i].nwo + ","
            console.log(el.innerText)
            el.innerText = el.innerText.substr(0, el.innerText.length - 1)
        }
        else
            el.innerText += " nothing"
        el = document.getElementById("ekw")
        el.innerText = "You are carrying"
        if (gra.gracz.ekw === undefined)
            el.innerText += " nothing"
        else
            el.innerText += " " + gra.gracz.ekw.nwo
    }

}
function _Pdmt(id, nwo, flaga, nazwa) {
    //nwo - nazwa w odmianie
    this.id = id;
    this.nwo = nwo;
    this.flaga = flaga;
    this.nazwa = nazwa;
    this.uzyj = function (gdzie) {
        if (ZAL[this.id].lok == gdzie)
            return ZAL[this.id].wykonaj()
        else if (ZAL[this.id].lok == "00")
            ZAL[this.id].wykonaj()
        else
            gra.gracz.powłoka.komunikat("u2")
    }
}
function _Warunek(idp, lok, wynik, kom, km, dod) {
    this.idp = idp
    this.lok = lok
    this.wynik = wynik
    this.kom = kom
    if (km === undefined)
        this.km = false
    else
        this.km = km

    if (dod === undefined)
        this.wykonaj = function zzzzz() {
            if (km)
                warunek0()
            gra.gracz.powłoka.komunikat("zal", this.idp)
            return PDMTY[this.wynik]
        }
    else
        this.wykonaj = function () {
            console.log("Warunek specjalny nr: ", dod)
            switch (dod) {
                case 1:
                    gra.gracz.powłoka.komunikat("zal+", this.idp)
                    return PDMTY[this.wynik]
                //break
                case 2:
                    gra.gracz.powłoka.komunikat("zal+", this.idp)
                    zabitySmok = true
                    gra.mapa[3][2].obr = "../DS68.bmp"
                    gra.mapa[3][2].init()
                    return PDMTY[this.wynik]
                //break\
                case 3:
                    if (zabitySmok) {
                        gra.gracz.powłoka.komunikat("zal", this.idp)
                        for (let i = 0; i < gra.mapa[3][2].pdmt.length; i++) {
                            if (gra.mapa[3][2].pdmt[i].flaga)
                                continue
                            gra.mapa[3][2].pdmt.splice(i, 1)
                        }
                        return PDMTY[this.wynik]
                    }
                    else {
                        console.log("warunek ze smokiem")
                        gra.gracz.powłoka.komunikat("u2")
                    }
                    return undefined
                case 4:
                    gra.koniec()
                    break
            }

        }


}
function warunek0() {
    kamienieMilowe++
    if (kamienieMilowe < 6)
        return undefined
    setTimeout(() => {
        let dl = gra.mapa[3][2].pdmt.length
        for (let i = dl - 1; i >= 0; i--) {
            console.log(gra.mapa[3][2].pdmt, i)
            if (gra.mapa[3][2].pdmt[i].flaga)
                continue
            gra.mapa[3][2].pdmt.splice(i, 1)
        }
        gra.gracz.ekw = ZAL["00"].wykonaj()
        //let index = gra.mapa[3][2].pdmt.length - 1
        gra.mapa[3][2].init()
        // setTimeout(function asdasdasddfswdqaf() {
        //     //gra.gracz.powłoka.komunikat("zal", "00")
        //     // gra.mapa[3][2].pdmt.splice(index, 1)
        //     // gra.mapa[3][2].pdmt.push(ZAL["37"].wykonaj())
        //     // gra.mapa[3][2].init()
        // }, 2000)
    }, 2500)
}
gra = {
    mapa: DANE,
    gracz: {
        poz: { y: 3, x: 6 },
        ekw: undefined,
        idz: function (kier) {
            switch (kier) {
                case "n":
                    this.poz.y--
                    break;
                case "e":
                    this.poz.x++
                    break;
                case "s":
                    this.poz.y++
                    break;
                case "w":
                    if (this.poz.y == 3 && this.poz.x == 1 && !zabitySmok) {
                        this.powłoka.komunikat("smok")
                        break
                    }
                    this.powłoka.komunikat("w")
                    this.poz.x--
                    break;
            }
            gra.mapa[this.poz.y][this.poz.x].init()
        },
        powłoka: {
            t: "",
            html: "",
            pol: function (e) {
                switch (e.key) {
                    case "Tab":
                        e.preventDefault()
                        this.autoUz()
                        break;
                    case "Enter":
                        this.wykonaj()
                        this.cls()
                        break;
                    case "CapsLock":
                        console.log("caps", !caps)
                        if (caps)
                            caps = false
                        else
                            caps = true
                        break;
                    case "Backspace":
                    case "ArrowLeft":
                        kursor.doT()
                        break;
                    case "ArrowRight":
                        kursor.doP()
                    default:
                        break;
                }
                console.log(e.key)
            },
            wykonaj: function () {
                this.html = document.getElementById("polecenia");
                console.log(this.html)
                if(this.html.value == "")
                {
                    this.komunikat("v")
                    return
                }
                var p = this.html.value.split(" ")
                var reszta = p[1]
                if (p.length == 1)
                    reszta = ""
                else
                    if (p.length >= 3) {
                        for (let i = 2; i < p.length; i++)
                            if (p[i] != "")
                                reszta += " " + p[i]
                        reszta = reszta.trim()
                    }
                let x = gra.gracz.poz.x
                let y = gra.gracz.poz.y
                console.log(p)
                switch (p[0]) {
                    case "N":
                    case "NORTH":
                        if (gra.mapa[y][x].kier[0] == 1) {
                            gra.gracz.idz("n")
                            this.komunikat("n")
                        } else
                            this.komunikat("kier")
                        break;
                    case "E":
                    case "EAST":
                        if (gra.mapa[y][x].kier[1] == 1) {
                            gra.gracz.idz("e")
                            this.komunikat("e")
                        } else
                            this.komunikat("kier")
                        break;
                    case "SOUTH":
                    case "S":
                        if (gra.mapa[y][x].kier[2] == 1) {
                            gra.gracz.idz("s")
                            this.komunikat("s")
                        } else
                            this.komunikat("kier")
                        break;
                    case "W":
                    case "WEST":
                        if (gra.mapa[y][x].kier[3] == 1) {
                            gra.gracz.idz("w")
                        } else
                            this.komunikat("kier")
                        break;
                    case "T":
                    case "TAKE":
                        var len = gra.mapa[y][x].pdmt.length
                        if (len == 0) {
                            this.komunikat("t3")
                            break;
                        }
                        //console.log(reszta, y, x, gra.mapa[y][x].pdmt[0].nazwa)
                        for (let i = 0; i < len; i++) {
                            if (reszta == gra.mapa[y][x].pdmt[i].nazwa)
                                if (gra.gracz.ekw === undefined) {
                                    if (gra.mapa[y][x].pdmt[i].flaga == 0) {
                                        this.komunikat("t2")
                                        return
                                    }
                                    this.komunikat("t1", gra.mapa[y][x].pdmt[i].nwo)
                                    gra.gracz.ekw = gra.mapa[y][x].pdmt[i]
                                    gra.mapa[y][x].pdmt.splice(i, 1)
                                    gra.mapa[y][x].init()
                                    return;
                                }
                                else {
                                    this.komunikat("t2")
                                    return
                                }
                        }
                        this.komunikat("t3")
                        break;
                    case "D":
                    case "DROP":
                        var len = gra.mapa[y][x].pdmt.length
                        if (gra.gracz.ekw === undefined) {
                            this.komunikat("d1")
                            break
                        }

                        if (reszta != gra.gracz.ekw.nazwa) {
                            this.komunikat("d4")
                            break
                        }
                        if (len >= 3) {
                            let flagi1 = 0;
                            for (let i = 0; i < len; i++)
                                if (gra.mapa[y][x].pdmt[i].flaga == 1)
                                    flagi1++;

                            if (flagi1 >= 3) {
                                this.komunikat("d2")
                                break;
                            }
                        }
                        gra.mapa[y][x].pdmt.push(gra.gracz.ekw)
                        this.komunikat("d3", gra.gracz.ekw.nwo)
                        gra.gracz.ekw = undefined;
                        gra.mapa[y][x].init()

                        break;
                    case "U":
                    case "USE":
                        if (gra.gracz.ekw === undefined)
                            this.komunikat("u1")
                        else {
                            if (gra.gracz.ekw.nazwa == reszta) {
                                let pdmt = gra.gracz.ekw.uzyj("" + (y + 1) + (x + 1))
                                if (pdmt !== undefined)
                                    if (pdmt.flaga)
                                        gra.gracz.ekw = pdmt
                                    else {
                                        gra.mapa[y][x].pdmt.push(pdmt)
                                        gra.gracz.ekw = undefined
                                    }
                                gra.mapa[y][x].init()
                            }
                            else
                                this.komunikat("u1")
                        }
                        break;
                    case "V":
                    case "VOCABULARY":
                        document.getElementById("ttt").style.display = "none"
                        var vg = document.getElementById("VG")
                        vg.innerHTML = "<p>" + "NORTH or N, SOUTH or S"
                            + "<p>" + "WEST or W, EAST or E"
                            + "<p>" + "TAKE (object) or T (object)"
                            + "<p>" + "DROP (object) or D (object)"
                            + "<p>" + "USE (object) or U (object)"
                            + "<p>" + "GOSSIPS or G, VOCABULARY or V"
                            + "<p id='ppp'>" + "Press any key"
                        document.getElementsByTagName("html")[0].addEventListener("keydown",
                            function klawiszeHTML(e) {
                                console.log(e.target === document.body)
                                if (e.target === document.body) {
                                    document.getElementById("VG").innerHTML = ""
                                    document.getElementById("ttt").style.display = "block"
                                    gra.gracz.powłoka.html.focus()
                                    document.getElementsByTagName("html")[0].removeEventListener("keydown", klawiszeHTML)
                                }
                                e.preventDefault()
                                kursor.poz = 0;
                            })
                            
                        break;
                    case "G":
                    case "GOSSIPS":
                        document.getElementById("ttt").style.display = "none"
                        var vg = document.getElementById("VG")
                        vg.innerHTML = "<p>" + "The  woodcutter lost  his home key..."
                            + "<p>" + "The butcher likes fruit... The cooper"
                            + "<p>" + "is greedy... Dratewka plans to make a"
                            + "<p>" + "poisoned  bait for the dragon...  The"
                            + "<p>" + "tavern owner is buying food  from the"
                            + "<p>" + "pickers... Making a rag from a bag..."
                            + "<p id='ppp'>" + "Press any key"
                        document.getElementsByTagName("html")[0].addEventListener("keydown",
                            function klawiszeHTML(e) {
                                console.log(e.target === document.body)
                                if (e.target === document.body) {
                                    document.getElementById("VG").innerHTML = ""
                                    document.getElementById("ttt").style.display = "block"
                                    gra.gracz.powłoka.html.focus()
                                    document.getElementsByTagName("html")[0].removeEventListener("keydown", klawiszeHTML)
                                }
                                e.preventDefault()
                                kursor.poz = 0;
                            })
                        break;
                    default:
                        this.komunikat("v")
                        break;
                }
            },
            cls: function () {
                this.t = ""
                this.html.value = "";
                kursor.poz = -1;
                kursor.ustaw0()
            },
            autoUz: function () {
                var p = this.html.value.split(" ")
                let reszta = p[1]
                let x = gra.gracz.poz.x
                let y = gra.gracz.poz.y
                let len = gra.mapa[y][x].pdmt.length
                let pdmty = gra.mapa[y][x].pdmt
                console.log(p)
                if (p.length == 1)
                    reszta = ""
                else
                    if (p.length >= 3) {
                        for (let i = 2; i < p.length; i++)
                            if (p[i] != "")
                                reszta += " " + p[i]
                        reszta = reszta.trim()
                    }

                console.log(reszta)

                switch (p[0]) {
                    case "T":
                    case "TAKE":
                        if (len == 0) {
                            this.t = ""
                            this.html.value = this.t
                            break;
                        }

                        this.t = "TAKE "
                        let index = []
                        let bufor = ""
                        for (let i = 0; i < len; i++) {
                            if (pdmty[i].flaga == 0)
                                continue
                            if (reszta.length == 0) {
                                index.push(i)
                                continue
                            }
                            for (let j = 0; j < reszta.length; j++) {
                                if (reszta[j] == pdmty[i].nazwa[j]) {
                                    if (j == reszta.length - 1) {
                                        index.push(i)
                                        console.log(reszta, pdmty[i].nazwa, j)
                                    }
                                }
                                else break
                            }
                        }
                        if (index.length == 0) {
                            //do zmiany
                            this.t = ""
                            this.html.value = this.t
                            break;
                        } else
                            if (index.length > 1) {
                                bufor = reszta
                                //     try {
                                //         for(let i = reszta.length;;i++)
                                //         {
                                //             bufor += pdmty[index[0]].nazwa[i]
                                //             for(let j = 1;j<index.length;j++)
                                //             {
                                //                 if(bufor[i] != pdmty[index[j]].nazwa[i])
                                //                     bufor[-1]
                                //             }
                                //         }
                                //     } catch 
                                //     {
                                //         console.log("Wyjątek",bufor)
                                //     }
                                this.t += bufor
                            }
                            else
                                this.t += pdmty[index[0]].nazwa
                        this.html.value = this.t
                        break;
                    case "D":
                    case "DROP":
                        if (gra.gracz.ekw !== undefined)
                            this.t = "DROP " + gra.gracz.ekw.nazwa
                        else
                            this.t = ""
                        this.html.value = this.t
                        break;
                    case "U":
                    case "USE":
                        if (gra.gracz.ekw !== undefined)
                            this.t = "USE " + gra.gracz.ekw.nazwa
                        else
                            this.t = ""
                        this.html.value = this.t
                        break;
                }
				kursor.ustaw(this.html.value.length)
            },
            komunikat: function (kod, d) {
                kod = kod.toLowerCase()
                html = document.getElementById("komunikat")
                html.style.display = "inline"
                document.getElementById("kom").style.display = "none"
                html.innerHTML = ""
                let czas = 1000
                console.log(kod)
                switch (kod) {
                    case "v":
                        html.innerText = "Try another word or V for vocabulary"
                        break;
                    case "kier":
                        html.innerText = "You can't go that way"
                        break;
                    case "w":
                        html.innerText = "You are going west..."
                        break;
                    case "s":
                        html.innerText = "You are going south..."
                        break;
                    case "e":
                        html.innerText = "You are going east..."
                        break;
                    case "n":
                        html.innerText = "You are going north..."
                        break;
                    case "t1":
                        html.innerText = "You are taking " + d
                        break
                    case "t2":
                        html.innerText = "You can't carry it"
                        break
                    case "t3":
                        html.innerText = "There isn't anything like that here"
                        break
                    case "d1":
                        html.innerText = "You are not carrying anything"
                        break
                    case "d2":
                        html.innerText = "You can't store any more here"
                        break
                    case "d3":
                        html.innerText = "You are about to drop " + d
                        break
                    case "d4":
                        html.innerText = "You are not carrying it"
                        break
                    case "u1":
                        html.innerText = "You aren't carrying anything like that"
                        break
                    case "u2":
                        html.innerText = "Nothing happened"
                        break
                    case "zal":
                        html.innerText = ZAL[d].kom
                        czas = 2000
                        break;
                    case "zal+":
                        let tmp = ZAL[d].kom.split("(timeout)")
                        console.log(tmp)
                        html.innerText = tmp[0]
                        for (let i = 1; i < tmp.length; i++ , czas += 1000)
                            setTimeout(() => {
                                html.innerText += tmp[i]
                            }, 1000 * i)
                        czas += 1000
                        break
                    case "smok":
                        html.innerText = "You can't go that way..."
                        czas = 2000
                        setTimeout(function asdasd() {
                            html.innerText += " The dragon sleeps in a cave!"
                        }, 1000)

                        break;
                }
                setTimeout(() => {
                    html.style.display = "none"
                    document.getElementById("kom").style.display = "inline"
                    gra.gracz.powłoka.html.focus()
                    gra.gracz.powłoka.html.value = ""
					kursor.ustaw0()
                }, czas)

            }
        }
    },
    odsw: function () {
        gra.mapa[gra.gracz.poz.y][gra.gracz.poz.y].init()
    },
    start: function () {
        var kliki = 0
        document.getElementsByTagName("html")[0].addEventListener("keydown",
            function klawiszeHTML(e) {
                console.log(e.target === document.body)
                if (e.target === document.body) {
                    if (++kliki >= 3) {
                        document.getElementById("czolowka").style.display = "none"
                        document.getElementById("wszystko").style.display = "block"
                        gra.gracz.powłoka.html.focus()
                        document.getElementsByTagName("html")[0].removeEventListener("keydown", klawiszeHTML)
                    } else
                        switch (kliki) {
                            case 1:
                                document.getElementById("czolowka").src = "dane/opis_A.jpg"
                                break
                            case 2:
                                document.getElementById("czolowka").src = "dane/opis_B.jpg"
                                break
                        }
                }
                e.preventDefault()
            })
            /*
        window.addEventListener("keyup", (e) => {
            if (e.key == "CapsLock") {
                console.log("caps", !caps)
                if (caps)
                    caps = false
                else
                    caps = true
            }
        })*/
        gra.mapa[3][6].init();
        document.getElementById("hejnal").play()
        document.getElementById("hejnal").currentTime = 70
        setTimeout(() => {
            document.getElementById("hejnal").pause()
        }, 13 * 1000)
        // console.log(document.getElementById("hejnal"))
    },
    koniec: function () {
        document.getElementById("wszystko").style.display = "none"
        document.getElementById("czolowka").src = "dane/koniec1.jpg"
        document.getElementById("czolowka").style.display = "block"
    },
    init: function () {
        this.gracz.powłoka.html = document.getElementById("polecenia")
        var el = this.gracz.powłoka.html
        el.onkeypress = function naDuze(e) {
            e.preventDefault()
            console.log(e.shiftKey, caps)
			if(this.value.length < kursor.max){
				if (e.shiftKey != caps)
					this.value += e.key.toUpperCase()
				else
					this.value += e.key.toLowerCase()
				kursor.doP()
			}
        }
        el.onkeydown = function (e) {
            return gra.gracz.powłoka.pol(e)
        }
        gra.gracz.powłoka.t = el.value
        gra.start()
        kursor.html = document.getElementById("kursor")
        setInterval(()=>{
            kursor.html.style.visibility = "hidden"
            setTimeout(()=>{
                kursor.html.style.visibility = "visible"
            },500)
        },1000)
    }
}

kursor = {
    html:0,
    start:154,
	max:25,
    krok:16,
    poz:0,
    doP:function(){
        if(document.getElementById("polecenia").value.length <= this.poz || this.poz >= this.max )
            return;
        this.poz++
        this.ustaw()
    },
    doT:function(){
        this.poz--
        if(this.poz < 0)
            this.poz = 0
        this.ustaw()
    },
    ustaw:function(poz){
		if(poz !== undefined)
			this.poz = poz
        this.html.style.left = this.start + this.poz*this.krok + "px"
    },
    ustaw0:function(){
        this.poz = 0
        this.html.style.left = this.start + "px"
    }
}