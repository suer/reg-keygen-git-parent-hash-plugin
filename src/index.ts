import {
  KeyGeneratorPlugin,
  PluginCreateOptions,
  KeyGeneratorPluginFactory
} from "reg-suit-interface";

import { fsUtil } from "reg-suit-util";

class GitParentHashKeygenPlugin implements KeyGeneratorPlugin<{ }> {
  private _conf!: PluginCreateOptions<{ }>;

  init(config: PluginCreateOptions<{ }>): void {
    this._conf = config;
  }

  getExpectedKey(): Promise<string> {
    return Promise.resolve('');
  }

  getActualKey(): Promise<string> {
    return Promise.resolve('');
  }
}

const pluginFactory: KeyGeneratorPluginFactory = () => {
  return {
    keyGenerator: new GitParentHashKeygenPlugin(),
  };
};

export = pluginFactory;
