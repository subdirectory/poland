// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.0-6/util/types.ts';

import { blake2b as blake2bJs } from 'https://esm.sh/@noble/hashes@1.1.2/blake2b.js';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.0-6/util/mod.ts';
import { blake2b, isReady } from 'https://deno.land/x/polkadot@0.0.0-6/wasm-crypto/mod.ts';

import { createAsHex } from '../helpers.ts';

/**
 * @name blake2AsU8a
 * @summary Creates a blake2b u8a from the input.
 * @description
 * From a `Uint8Array` input, create the blake2b and return the result as a u8a with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { blake2AsU8a } from 'https://deno.land/x/polkadot@0.0.0-6/util-crypto/mod.ts';
 *
 * blake2AsU8a('abc'); // => [0xba, 0x80, 0xa5, 0x3f, 0x98, 0x1c, 0x4d, 0x0d]
 * ```
 */
export function blake2AsU8a (data: HexString | Uint8Array | string, bitLength: 64 | 128 | 256 | 384 | 512 = 256, key?: Uint8Array | null, onlyJs?: boolean): Uint8Array {
  const byteLength = Math.ceil(bitLength / 8);
  const u8a = u8aToU8a(data);

  return !hasBigInt || (!onlyJs && isReady())
    ? blake2b(u8a, u8aToU8a(key), byteLength)
    : blake2bJs(u8a, { dkLen: byteLength, key: key || undefined });
}

/**
 * @name blake2AsHex
 * @description Creates a blake2b hex from the input.
 */
export const blake2AsHex = createAsHex(blake2AsU8a);
