module.exports = {
  normalizeEntityName() {},
  afterInstall() {
    return this.addAddonToProject({ name: 'ember-cli-cjs-transform' });
  }
};
