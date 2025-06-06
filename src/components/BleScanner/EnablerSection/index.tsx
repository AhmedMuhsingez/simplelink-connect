/*
 * Copyright (c) 2023, Texas Instruments Incorporated
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * *  Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * *  Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * *  Neither the name of Texas Instruments Incorporated nor the names of
 *    its contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Text } from '../../Themed';
import React, { Dispatch, SetStateAction } from 'react';
import { Switch } from '../../Themed';
import Colors from '../../../constants/Colors';

interface Props {
  scanEnable: boolean;
  setScanEnable: (state: boolean) => void;
  disabled: boolean
}

const EnablerSection: React.FC<Props> = ({ scanEnable, setScanEnable, disabled }) => {
  const { fontScale } = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      <Text
        numberOfLines={1}
        allowFontScaling
        adjustsFontSizeToFit={true}
        style={{ color: Colors.darkGray, fontSize: 18 / fontScale }}
      >
        Enable BluetoothLE Scan
      </Text>
      <Switch onValueChange={(value) => setScanEnable(value)} value={scanEnable} disabled={disabled} style={{ opacity: disabled ? 0.2 : 1 }} />
    </View>
  );
};

export default EnablerSection;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    backgroundColor: Colors.lightGray,
  },
});
