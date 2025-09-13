module.exports = {
  documentationSidebar: [
    'intro',
    'global-flags',
    {
      type: 'category',
      label: 'Commands',
      items: ['commands/scan', 'commands/ignore', 'commands/unignore'],
    },
    {
      type: 'category',
      label: 'Env Naming Conventions',
      items: ['env-naming-conventions/env-variables', 'env-naming-conventions/env-files'],
    },
    'contributing',
  ],
};
