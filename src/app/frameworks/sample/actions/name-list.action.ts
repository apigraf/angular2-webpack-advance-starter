import { Action } from '@ngrx/store';
import { type } from '../../core/utils/type';
import { CATEGORY } from '../common/category.common';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface INameListActions {
  INIT: string;
  INITIALIZED: string;
  INIT_FAILED: string;
  ADD: string;
  NAME_ADDED: string;
}

export const actionTypes: INameListActions = {
  INIT:        type(`${CATEGORY} Init`),
  INITIALIZED: type(`${CATEGORY} Initialized`),
  INIT_FAILED: type(`${CATEGORY} Init Failed`),
  ADD:         type(`${CATEGORY} Add`),
  NAME_ADDED:  type(`${CATEGORY} Name Added`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions:
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitAction implements Action {
  public type = actionTypes.INIT;
  public payload: string = null;
}

export class InitializedAction implements Action {
  public type = actionTypes.INITIALIZED;

  constructor(public payload: string[]) { }
}

export class InitFailedAction implements Action {
  public type = actionTypes.INIT_FAILED;
  public payload: string = null;
}

export class AddAction implements Action {
  public type = actionTypes.ADD;

  constructor(public payload: string) { }
}

export class NameAddedAction implements Action {
  public type = actionTypes.NAME_ADDED;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = InitAction
  | InitializedAction
  | InitFailedAction
  | AddAction
  | NameAddedAction;
