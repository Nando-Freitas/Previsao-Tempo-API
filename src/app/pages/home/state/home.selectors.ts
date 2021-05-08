import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

//Captura o estado todo e passa apenas a chave
export const selectHomeState = createFeatureSelector('home');

export const selectCurrentWeather = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.entity,
);

export const selectCurrentWeatherLoading = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.loading,
);

export const selectCurrentWeatherError = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.error,
);
