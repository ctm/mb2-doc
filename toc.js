// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
var sidebarScrollbox = document.querySelector("#sidebar .sidebar-scrollbox");
sidebarScrollbox.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="friends.html">Poker, with your friends</a></li><li class="chapter-item "><a href="demo.html">Demo</a></li><li class="chapter-item "><a href="accounts.html">Accounts</a></li><li class="chapter-item "><a href="privacy.html">Privacy</a></li><li class="chapter-item "><a href="security.html">Security</a></li><li class="chapter-item "><a href="new_to_poker.html">New to Poker?</a></li><li class="chapter-item "><a href="lobby.html">Lobby</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="lobby/top_line.html">Top Line</a></li><li class="chapter-item "><a href="lobby/new_event.html">Creating Tournaments</a></li><li class="chapter-item "><a href="lobby/preferences.html">Preferences</a></li></ol></li><li class="chapter-item "><a href="tables.html">Tables</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tables/top_line.html">Top Line</a></li><li class="chapter-item "><a href="tables/advanced.html">Advanced Checkboxes</a></li><li class="chapter-item "><a href="tables/immediate.html">Immediate Buttons</a></li><li class="chapter-item "><a href="tables/shareable-urls.html">Shareable URLs</a></li><li class="chapter-item "><a href="tables/review-button.html">Review Button</a></li></ol></li><li class="chapter-item "><a href="fun_money.html">Fun Money</a></li><li class="chapter-item "><a href="tournaments.html">Tournaments</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tournaments/structures.html">Structures</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tournaments/structures/templates.html">Templates</a></li></ol></li><li class="chapter-item "><a href="tournaments/payouts.html">Payouts</a></li></ol></li><li class="chapter-item "><a href="series.html">Series</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="series/historical.html">Historical</a></li><li class="chapter-item "><a href="series/2022.html">2022</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="series/2022/wsop-style.html">WSOP-Style</a></li><li class="chapter-item "><a href="series/2022/wywab.html">WYWAB</a></li></ol></li><li class="chapter-item "><a href="series/2023.html">2023</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="series/2023/wywae.html">WYWAE</a></li><li class="chapter-item "><a href="series/2023/wsop-style.html">WSOP-Style</a></li><li class="chapter-item "><a href="series/2023/wywab.html">WYWAB</a></li></ol></li><li class="chapter-item "><a href="series/2024.html">2024</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="series/2024/wywae.html">WYWAE</a></li><li class="chapter-item "><a href="series/2024/wsop-style.html">WSOP-Style</a></li><li class="chapter-item "><a href="series/2024/wywab.html">WYWAB</a></li></ol></li></ol></li><li class="chapter-item "><a href="ring_games.html">Ring Games</a></li><li class="chapter-item "><a href="vacation.html">Vacation</a></li><li class="chapter-item "><a href="chat.html">Chat</a></li><li class="chapter-item "><a href="games.html">Games</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="games/bidirectional-chowaha.html">Bidirectional Chowaha</a></li><li class="chapter-item "><a href="games/dealers-choice.html">Dealer&#39;s Choice</a></li><li class="chapter-item "><a href="games/dramadugi.html">Dramadugi</a></li><li class="chapter-item "><a href="games/five-card-omaha.html">Five Card Omaha</a></li><li class="chapter-item "><a href="games/mexican-poker.html">Mexican Poker</a></li><li class="chapter-item "><a href="games/omaha-x-or-better.html">Omaha X Or Better</a></li><li class="chapter-item "><a href="games/quick-quads.html">Quick Quads</a></li><li class="chapter-item "><a href="games/redrum.html">Redrum</a></li><li class="chapter-item "><a href="games/regular-pineapple.html">Regular Pineapple</a></li><li class="chapter-item "><a href="games/rio-bravo.html">Rio Bravo</a></li><li class="chapter-item "><a href="games/sack.html">Sack</a></li><li class="chapter-item "><a href="games/wonky-donkey.html">Wonky Donkey</a></li></ol></li><li class="chapter-item "><a href="esoterica.html">Esoterica</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="esoterica/lammers.html">Lammers</a></li><li class="chapter-item "><a href="esoterica/github.html">GitHub</a></li><li class="chapter-item "><a href="esoterica/balancing.html">Table Balancing</a></li><li class="chapter-item "><a href="esoterica/sevens-rule.html">Sevens Rule</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="esoterica/sevens-rule/penalty.html">Penalty</a></li><li class="chapter-item "><a href="esoterica/sevens-rule/examples.html">Examples</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="barge/index.html">BARGE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="barge/rule_book.html">BARGE Rule Book</a></li><li class="chapter-item "><a href="barge/structures.html">*ARGE Structures</a></li><li class="chapter-item "><a href="barge/payouts.html">BARGE Unified Tournament Payouts</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="thanks.html">Thanks!</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="thanks/ancient.html">Ancient Programming…</a></li><li class="chapter-item "><a href="thanks/pre-internet.html">Gambling Songs…</a></li><li class="chapter-item "><a href="thanks/internet-programming.html">Programming Poker on the internet</a></li><li class="chapter-item "><a href="thanks/internet-playing.html">Playing Poker on the internet</a></li><li class="chapter-item "><a href="thanks/barge.html">Playing Poker in Las Vegas</a></li><li class="chapter-item "><a href="thanks/multibot.html">Multibot</a></li><li class="chapter-item "><a href="thanks/post-multibot.html">Post-multibot</a></li><li class="chapter-item "><a href="thanks/mb2.html">Mb2</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="craft-poker-co.html">Craft Poker Co.</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="craft-poker-co/craftpoker.html">craftpoker.com</a></li><li class="chapter-item "><a href="craft-poker-co/updates.html">Updates</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="craft-poker-co/updates/interest.html">Looking for Interest</a></li><li class="chapter-item "><a href="craft-poker-co/updates/2024-10-29-status.html">2024-10-29 Micro Status Report</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="third-party-licenses.html">Third Party Licenses</a></li></ol>';
(function() {
    let current_page = document.location.href.toString();
    if (current_page.endsWith("/")) {
        current_page += "index.html";
    }
    var links = sidebarScrollbox.querySelectorAll("a");
    var l = links.length;
    for (var i = 0; i < l; ++i) {
        var link = links[i];
        var href = link.getAttribute("href");
        if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
            link.href = path_to_root + href;
        }
        // The "index" page is supposed to alias the first chapter in the book.
        if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
            link.classList.add("active");
            var parent = link.parentElement;
            while (parent) {
                if (parent.tagName === "LI" && parent.previousElementSibling) {
                    if (parent.previousElementSibling.classList.contains("chapter-item")) {
                        parent.previousElementSibling.classList.add("expanded");
                    }
                }
                parent = parent.parentElement;
            }
        }
    }
})();

// Track and set sidebar scroll position
sidebarScrollbox.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        sessionStorage.setItem('sidebar-scroll', sidebarScrollbox.scrollTop);
    }
}, { passive: true });
var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
sessionStorage.removeItem('sidebar-scroll');
if (sidebarScrollTop) {
    // preserve sidebar scroll position when navigating via links within sidebar
    sidebarScrollbox.scrollTop = sidebarScrollTop;
} else {
    // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
    var activeSection = document.querySelector('#sidebar .active');
    if (activeSection) {
        activeSection.scrollIntoView({ block: 'center' });
    }
}
