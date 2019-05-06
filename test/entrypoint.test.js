import assert from 'assert'
import path from 'path'
import configuration from '../setup/configuration'
import { IsFileOrFolderJSModule } from './entrypoint.js'
const assetFolder = path.join(configuration.directory.application.containerAbsolutePath, 'test/asset')

describe('function IsFileOrFolderJSModule: ', function() {
  describe('Type of module - string', function() {
    it('Should return `directory`', function() {
      let type = IsFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'folderModule') })
      assert.strictEqual(type, 'directory')
    })
    it('Should return `file`', function() {
      let type = IsFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'fileModule') })
      assert.strictEqual(type, 'file')
    })
  })

  describe('Type of module - boolean according to the type in question', function() {
    it('Should return true for matching types', function() {
      let type1 = IsFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'folderModule'), isType: 'directory' })
      assert.strictEqual(type1, true)
      let type2 = IsFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'fileModule'), isType: 'file' })
      assert.strictEqual(type2, true)
    })
    it('Should return false for non-matching types', function() {
      let type1 = IsFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'folderModule'), isType: 'file' })
      assert.strictEqual(type1, false)
      let type2 = IsFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'fileModule'), isType: 'directory' })
      assert.strictEqual(type2, false)
    })
  })
})
