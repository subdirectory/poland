// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ToBnOptions } from '../types.ts';

import { BigInt } from 'https://deno.land/x/polkadot@0.0.4-9/x-bigint/mod.ts';

import { objectSpread } from '../object/spread.ts';
import { u8aToBigInt } from '../u8a/toBigInt.ts';
import { hexToU8a } from './toU8a.ts';

/**
 * @name hexToBigInt
 * @summary Creates a BigInt instance object from a hex string.
 */
export function hexToBigInt (value?: string | null, options: ToBnOptions = {}): bigint {
  return !value || value === '0x'
    ? BigInt(0)
    : u8aToBigInt(
      hexToU8a(value),
      objectSpread({ isLe: false, isNegative: false }, options)
    );
}
