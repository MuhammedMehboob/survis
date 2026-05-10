/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'LiDAR Snow Removal Literature Review';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 * field: BibTeX field used for generating the tag clouds,
 * title: Title displayed as headline
 * minTagFrequency: minimum frequency of a tag to be displayed
 * @type {{field: string, title: string, minTagFrequency: number}[]}
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}, {
    field: 'series',
    title: 'Series',
    minTagFrequency: 1
}];

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
var editable = false;

/**
 * Subtitle describing the paper the data is referring to (set to null to deactivate)
 * @type {{html: string, id: string}}
 */
var paper = null;

/**
 * Extra pages like an about page that will be listed in the footer and can be opened on demand (page name -> path)
 */
var extraPages = {
    'about': 'about.html'
};

/**
 * Custom style as path to an extra css file (leave empty if not applicable)
 * @type {string}
 */
var customStyle = '';

/**
 * Default tag to filter by on page load
 * @type {string}
 */
var start_tag = 'lidar';

/**
 * Options for showing citation information (set to null to avoid showing any citation information)
 * @type {{minCitationCount: number}}
 */
var citations = null;