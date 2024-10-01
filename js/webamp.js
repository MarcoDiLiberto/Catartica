// once WebAmp script is loaded, do this.
function startWebAmp() {
    const app = document.getElementById("webamp");
    const webamp = new Webamp({
        __initialWindowLayout: {
            // width = 275
            main: {
                position: {
                    x: 0,
                    y: 0
                }
            },
            // 0,0
            equalizer: {
                position: {
                    x: 0,
                    y: 116
                }
            },
            //0,116
            playlist: {
                position: {
                    x: 0,
                    y: 232
                },
                size: [0, 0]
            },
            //0,232
        },
        initialSkin: {
            url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/winamp_skins/black_red_minimal.wsz"
        },
    });
    webamp.renderWhenReady(app);

    /* skins
        ac124d0b0b1badb356c338d66e3fd565 - pac-man
        */

    //https://aqdas-cors-anywhere.herokuapp.com/ -- to subvert the CORS problem
    webamp.appendTracks([// TEMPLATE: {url: "", metaData: {artist: "", title: ""}},

    {
        url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/opium.wav",
        metaData: {
            artist: "Masullo",
            title: "Merda Oppioide"
        }
    },
    {
        url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/EmboDISCO.mp3",
        metaData: {
            artist: "Masullo",
            title: "EmboDISCO"
        }
    },
    {
        url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/THE%20SHIT%20SONG.mp3",
        metaData: {
            artist: "Masullo",
            title: "The Shit Song"
        }
    },
    {
        url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/giustificazione.mp3",
        metaData: {
            artist: "Masullo",
            title: "Giustificazione"
        }
    },
    {
        url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/ASMR.mp3",
        metaData: {
            artist: "Masullo",
            title: "ASMR"
        }
    },
    {
        url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/TI%20PIACCIONO%20I%20DEFTONES.mp3",
        metaData: {
            artist: "Masullo",
            title: "Ti piacciono i Deftones"
        }
    },
    {
        url: "https://file.garden/Ztdf0nae60zraA05/embodisco/sito/music/CAGARE%2C%20YOU%20GOT%20IT.mp3",
        metaData: {
            artist: "Masullo",
            title: "Cagare, You Got It"
        }
    },
    
    ]);

    //webamp.play();
}

// Load the WebAmp script and run the above function
// method where it loads the script in here. can't import so create the element.
var script = document.createElement("script");
script.type = "text/javascript";
script.async = true;
script.onload = function() {
    // once script loaded
    startWebAmp();
}
;
script.src = "https://file.garden/ZRW0B_KULjLI59Tb/unpkgwebamp.js";
document.head.appendChild(script);
