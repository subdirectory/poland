// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, bool, u32 } from 'https://deno.land/x/polkadot@0.0.8/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.8/types-codec/types/index.ts';

/** @name BenchmarkConfig */
export interface BenchmarkConfig extends Struct {
  readonly pallet: Bytes;
  readonly benchmark: Bytes;
  readonly selectedComponents: Vec<ITuple<[BenchmarkParameter, u32]>>;
  readonly verify: bool;
  readonly internalRepeats: u32;
}

/** @name BenchmarkList */
export interface BenchmarkList extends Struct {
  readonly pallet: Bytes;
  readonly instance: Bytes;
  readonly benchmarks: Vec<BenchmarkMetadata>;
}

/** @name BenchmarkMetadata */
export interface BenchmarkMetadata extends Struct {
  readonly name: Bytes;
  readonly components: Vec<ITuple<[BenchmarkParameter, u32, u32]>>;
}

/** @name BenchmarkParameter */
export interface BenchmarkParameter extends Enum {
  readonly isA: boolean;
  readonly isB: boolean;
  readonly isC: boolean;
  readonly isD: boolean;
  readonly isE: boolean;
  readonly isF: boolean;
  readonly isG: boolean;
  readonly isH: boolean;
  readonly isI: boolean;
  readonly isJ: boolean;
  readonly isK: boolean;
  readonly isL: boolean;
  readonly isM: boolean;
  readonly isN: boolean;
  readonly isO: boolean;
  readonly isP: boolean;
  readonly isQ: boolean;
  readonly isR: boolean;
  readonly isS: boolean;
  readonly isT: boolean;
  readonly isU: boolean;
  readonly isV: boolean;
  readonly isW: boolean;
  readonly isX: boolean;
  readonly isY: boolean;
  readonly isZ: boolean;
  readonly type: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
}

export type PHANTOM_BENCHMARK = 'benchmark';
