// show hidden blocks, run after the ext was loaded

// get all loaded ext idsa
vm.extensionManager._loadedExtensions.keys().forEach(k => {
    // find the blocks for the ext in the runtime
    let extblocks = (vm.extensionManager.runtime._blockInfo.find(a => a.id == k));
    // make blocks not hidden
    for (const block of extblocks.blocks) {
		block.info.origHidden = block.info.hideFromPalette;
        block.info.hideFromPalette = false;
		if (block.info.origHidden && !block.json.message0.includes('(HIDDEN)')) {
			block.json.message0 = '(HIDDEN) ' + block.json.message0
		}
    }
})
