// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../types.ts';

import { assert } from 'https://deno.land/x/polkadot@0.0.0-6/util/mod.ts';

import { DeriveJunction } from './DeriveJunction.ts';

export function createSeedDeriveFn (fromSeed: (seed: Uint8Array) => Keypair, derive: (seed: Uint8Array, chainCode: Uint8Array) => Uint8Array): (keypair: Keypair, junction: DeriveJunction) => Keypair {
  return (keypair: Keypair, { chainCode, isHard }: DeriveJunction): Keypair => {
    assert(isHard, 'A soft key was found in the path and is not supported');

    return fromSeed(
      derive(keypair.secretKey.subarray(0, 32), chainCode)
    );
  };
}
