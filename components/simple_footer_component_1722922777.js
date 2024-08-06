/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722922777", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div id="footer-container" class="max-w-screen-xl p-8 mx-auto lg:py-16">
            <div id="footer-content" class="text-center bg-opacity-20 bg-white rounded-lg backdrop-filter backdrop-blur-lg shadow-lg p-8">
                <div class="flex mb-6">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center text-3xl font-bold">
                        <img id="footer-logo" src="./images/logo.svg" class="h-10 mr-3 sm:h-12" alt="Landwind Logo" />
                        BlockExplore - Discover Blockchain Data
                    </a>
                </div>
                <hr id="footer-divider" class="my-6 border-pink-300 opacity-30">
                <div class="flex">
                    <div id="footer-text" class="flex-1 text-lg text-center">
                        Stay ahead of the curve with BlockExplore. Our decentralized app scours the blockchain to bring you the latest information and insights. Never miss an opportunity in the dynamic world of blockchain again.
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
