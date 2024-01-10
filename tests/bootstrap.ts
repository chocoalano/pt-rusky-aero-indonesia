/**
 * File source: https://bit.ly/3ukaHTz
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import type { Config } from '@japa/runner'
import TestUtils from '@ioc:Adonis/Core/TestUtils'
import { assert, runFailedTests, specReporter, apiClient } from '@japa/preset-adonis'

export const plugins: Required<Config>['plugins'] = [assert(), runFailedTests(), apiClient()]
export const reporters: Required<Config>['reporters'] = [specReporter()]
export const runnerHooks: Pick<Required<Config>, 'setup' | 'teardown'> = {
  setup: [() => TestUtils.ace().loadCommands()],
  teardown: [],
}
export const configureSuite: Required<Config>['configureSuite'] = (suite) => {
  if (suite.name === 'functional') {
    suite.setup(() => TestUtils.httpServer().start())
  }
}
