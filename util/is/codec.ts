// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '../types.ts';

import { isOnObject } from './helpers.ts';

interface Registry {
  get: (...params: unknown[]) => unknown;
}

interface Codec {
  readonly registry: Registry;

  toHex (isLe?: boolean): HexString;
  toU8a: (isBare?: unknown) => Uint8Array;
}

const checkCodec = isOnObject<Codec>('toHex', 'toU8a');
const checkRegistry = isOnObject<Registry>('get');

export function isCodec <T extends Codec = Codec> (value?: unknown): value is T {
  return checkCodec(value) && checkRegistry(value.registry);
}
