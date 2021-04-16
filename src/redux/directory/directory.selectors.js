import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

//gestisce lo stato delle card menuitem
export const selectDirectorySections = createSelector(
	[selectDirectory],
	directory => directory.sections
);