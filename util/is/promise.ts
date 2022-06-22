// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isOnObject } from './helpers.ts';

export const isPromise = isOnObject<Promise<unknown>>('catch', 'then');
