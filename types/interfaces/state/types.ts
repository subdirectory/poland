// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { StorageKey } from 'https://deno.land/x/polkadot@0.0.4-4/types/mod.ts';
import type { Bytes, Enum, HashMap, Option, Struct, Text, U8aFixed, Vec, bool, u32, u64, u8 } from 'https://deno.land/x/polkadot@0.0.4-4/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.4-4/types-codec/types/index.ts';
import type { Hash, StorageData } from 'https://deno.land/x/polkadot@0.0.4-4/types/interfaces/runtime/index.ts';

/** @name ApiId */
export interface ApiId extends U8aFixed {}

/** @name BlockTrace */
export interface BlockTrace extends Struct {
  readonly blockHash: Text;
  readonly parentHash: Text;
  readonly tracingTargets: Text;
  readonly storageKeys: Text;
  readonly spans: Vec<BlockTraceSpan>;
  readonly events: Vec<BlockTraceEvent>;
}

/** @name BlockTraceEvent */
export interface BlockTraceEvent extends Struct {
  readonly target: Text;
  readonly data: BlockTraceEventData;
  readonly parentId: Option<u64>;
}

/** @name BlockTraceEventData */
export interface BlockTraceEventData extends Struct {
  readonly stringValues: HashMap<Text, Text>;
}

/** @name BlockTraceSpan */
export interface BlockTraceSpan extends Struct {
  readonly id: u64;
  readonly parentId: Option<u64>;
  readonly name: Text;
  readonly target: Text;
  readonly wasm: bool;
}

/** @name KeyValueOption */
export interface KeyValueOption extends ITuple<[StorageKey, Option<StorageData>]> {}

/** @name MigrationStatusResult */
export interface MigrationStatusResult extends Struct {
  readonly topRemainingToMigrate: u64;
  readonly childRemainingToMigrate: u64;
}

/** @name ReadProof */
export interface ReadProof extends Struct {
  readonly at: Hash;
  readonly proof: Vec<Bytes>;
}

/** @name RuntimeVersion */
export interface RuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
  readonly transactionVersion: u32;
  readonly stateVersion: u8;
}

/** @name RuntimeVersionApi */
export interface RuntimeVersionApi extends ITuple<[ApiId, u32]> {}

/** @name RuntimeVersionPartial */
export interface RuntimeVersionPartial extends Struct {
  readonly specName: Text;
  readonly specVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
}

/** @name RuntimeVersionPre3 */
export interface RuntimeVersionPre3 extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
}

/** @name RuntimeVersionPre4 */
export interface RuntimeVersionPre4 extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
  readonly transactionVersion: u32;
}

/** @name SpecVersion */
export interface SpecVersion extends u32 {}

/** @name StorageChangeSet */
export interface StorageChangeSet extends Struct {
  readonly block: Hash;
  readonly changes: Vec<KeyValueOption>;
}

/** @name TraceBlockResponse */
export interface TraceBlockResponse extends Enum {
  readonly isTraceError: boolean;
  readonly asTraceError: TraceError;
  readonly isBlockTrace: boolean;
  readonly asBlockTrace: BlockTrace;
  readonly type: 'TraceError' | 'BlockTrace';
}

/** @name TraceError */
export interface TraceError extends Struct {
  readonly error: Text;
}

export type PHANTOM_STATE = 'state';
