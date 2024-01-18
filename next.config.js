/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
    // Specify a custom path here
    // './somewhere/else/i18n.ts'
);
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
});
