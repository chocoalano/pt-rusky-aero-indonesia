import { test } from '@japa/runner'
import list from './list.spec'
import { store, storeValidate } from './store.spec'
import show from './show.spec'
import { update, updateValidate } from './update.spec'
import destroy from './delete.spec'
test.group('Penerbit', () => {
  list(),
    store(),
    storeValidate(),
    show(),
    update(),
    updateValidate(),
    destroy()
})
