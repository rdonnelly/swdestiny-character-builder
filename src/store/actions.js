// DECK ACTIONS

const addCharacterToDeck = (characterObject) => ({
  type: 'ADD_CHARACTER_TO_DECK',
  payload: {
    characterAffiliation: characterObject.affiliation,
    characterId: characterObject.id,
    characterName: characterObject.name,
  },
});

const removeCharacterFromDeck = (characterObject) => ({
  type: 'REMOVE_CHARACTER_FROM_DECK',
  payload: {
    characterAffiliation: characterObject.affiliation,
    characterId: characterObject.id,
    characterName: characterObject.name,
  },
});

const setCharacterAnyInDeck = (characterObject) => ({
  type: 'SET_CHARACTER_ANY_IN_DECK',
  payload: {
    characterAffiliation: characterObject.affiliation,
    characterId: characterObject.id,
    characterName: characterObject.name,
  },
});

const setCharacterRegularInDeck = (characterObject) => ({
  type: 'SET_CHARACTER_REGULAR_IN_DECK',
  payload: {
    characterAffiliation: characterObject.affiliation,
    characterId: characterObject.id,
    characterName: characterObject.name,
  },
});

const setCharacterEliteInDeck = (characterObject) => ({
  type: 'SET_CHARACTER_ELITE_IN_DECK',
  payload: {
    characterAffiliation: characterObject.affiliation,
    characterId: characterObject.id,
    characterName: characterObject.name,
  },
});

const includeCharacterInDeck = (characterId) => ({
  type: 'INCLUDE_CHARACTER',
  payload: {
    characterId,
  },
});

const excludeCharacterInDeck = (characterId) => ({
  type: 'EXCLUDE_CHARACTER',
  payload: {
    characterId,
  },
});

const resetDeck = () => ({
  type: 'RESET_DECK',
});

const resetSettingsFilters = () => ({
  type: 'RESET_FILTERS',
});

// CHARACTER ACTIONS

const updateCharacters = (
  validAffiliations,
  validFactions,
  validFormats,
  validDamageTypes,
  validSets,
  deckAffiliation,
  deckCharacters,
) => ({
  type: 'UPDATE_CHARACTERS_COMPATIBILITY',
  payload: {
    validAffiliations,
    validFactions,
    validFormats,
    validDamageTypes,
    validSets,
    deckAffiliation,
    deckCharacters,
  },
});

const updateCharacterInclusion = (excludedCharacterIds) => ({
  type: 'UPDATE_CHARACTER_INCLUSION',
  payload: {
    excludedCharacterIds,
  },
});

const resetCharacters = (
  validAffiliations,
  validFactions,
  validFormats,
  validDamageTypes,
  validSets,
  deckAffiliation,
  deckCharacters,
) => ({
  type: 'RESET_CHARACTERS',
  payload: {
    validAffiliations,
    validFactions,
    validFormats,
    validDamageTypes,
    validSets,
    deckAffiliation,
    deckCharacters,
  },
});

const updateCharacterQuery = (query) => ({
  type: 'UPDATE_CHARACTER_QUERY',
  payload: {
    query,
  },
});

// TEAMS ACTIONS

const setSetting = (key, value) => ({
  type: 'SET_FILTER',
  payload: {
    key,
    value,
  },
});

const setSort = (sortPriority) => ({
  type: 'SET_SORT',
  payload: {
    sortPriority,
  },
});

// HELPERS

const resetCharactersHelper = (dispatch, getState) =>
  dispatch(
    resetCharacters(
      getState().teams.settings.filters.affiliations,
      getState().teams.settings.filters.factions,
      getState().teams.settings.filters.formats,
      getState().teams.settings.filters.damageTypes,
      getState().teams.settings.filters.sets,
      getState().deck.affiliation,
      getState().deck.characters,
    ),
  );

const updateCharactersHelper = (dispatch, getState) =>
  dispatch(
    updateCharacters(
      getState().teams.settings.filters.affiliations,
      getState().teams.settings.filters.factions,
      getState().teams.settings.filters.formats,
      getState().teams.settings.filters.damageTypes,
      getState().teams.settings.filters.sets,
      getState().deck.affiliation,
      getState().deck.characters,
    ),
  );

// ACTIONS

const addCharacter = (characterObject) => (dispatch, getState) => {
  if (
    characterObject.isUnique &&
    getState().deck.characters.some(
      (deckCharacterObject) => deckCharacterObject.id === characterObject.id,
    )
  ) {
    return Promise.resolve().then(
      dispatch({ type: 'ERROR/UNIQUE_CHARACTERS' }),
    );
  }

  return Promise.resolve()
    .then(dispatch(addCharacterToDeck(characterObject)))
    .then(updateCharactersHelper(dispatch, getState));
};

const setCharacterAny = (characterObject) => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(setCharacterAnyInDeck(characterObject)))
    .then(updateCharactersHelper(dispatch, getState));

const setCharacterRegular = (characterObject) => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(setCharacterRegularInDeck(characterObject)))
    .then(updateCharactersHelper(dispatch, getState));

const setCharacterElite = (characterObject) => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(setCharacterEliteInDeck(characterObject)))
    .then(updateCharactersHelper(dispatch, getState));

const removeCharacter = (characterObject) => (dispatch, getState) => {
  if (
    !getState().deck.characters.some(
      (deckCharacterObject) => deckCharacterObject.id === characterObject.id,
    )
  ) {
    return Promise.resolve().then(dispatch({ type: 'ERROR/NO_CHARACTER' }));
  }

  return Promise.resolve()
    .then(dispatch(removeCharacterFromDeck(characterObject)))
    .then(updateCharactersHelper(dispatch, getState));
};

const includeCharacter = (characterId) => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(includeCharacterInDeck(characterId)))
    .then(
      dispatch(updateCharacterInclusion(getState().deck.excludedCharacterIds)),
    );

const excludeCharacter = (characterId) => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(excludeCharacterInDeck(characterId)))
    .then(
      dispatch(updateCharacterInclusion(getState().deck.excludedCharacterIds)),
    );

const reset = () => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(resetDeck()))
    .then(dispatch(resetCharactersHelper(dispatch, getState)));

const resetFilters = () => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(resetSettingsFilters()))
    .then(dispatch(resetCharactersHelper(dispatch, getState)));

const updateSetting = (key, value) => (dispatch, getState) =>
  Promise.resolve()
    .then(dispatch(setSetting(key, value)))
    .then(updateCharactersHelper(dispatch, getState));

const updateSort = (value) => (dispatch) =>
  Promise.resolve().then(dispatch(setSort(value)));

export {
  addCharacter,
  setCharacterAny,
  setCharacterRegular,
  setCharacterElite,
  removeCharacter,
  includeCharacter,
  excludeCharacter,
  reset,
  updateCharacterQuery,
  updateSetting,
  updateSort,
  resetFilters,
};
