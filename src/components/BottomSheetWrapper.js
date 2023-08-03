import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useMemo,
    useCallback,
  } from 'react';
  import {StyleSheet, View} from 'react-native';
  import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
    useBottomSheetDynamicSnapPoints,
  } from '@gorhom/bottom-sheet';
  import {useSelector} from 'react-redux';
  
  import { theme } from "../constants";

  const BottomSheetWrapper = forwardRef((props, ref) => {
    
    const internalRef = useRef(null);
    const styles = makeStyles(theme);

    useImperativeHandle(ref, () => ({
      open: () => {
        internalRef.current.snapToIndex(1);
      },
      close: () => {
        internalRef.current.close();
      },
    }));

    const snapPoints = useMemo(() => ['1%', 'CONTENT_HEIGHT'], []);
    
    const {
      animatedHandleHeight,
      animatedSnapPoints,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(snapPoints);
    const renderBackdrop = useCallback(
      childprops => (
        <BottomSheetBackdrop
          {...childprops}
          onPress={() => {
            props?.onPressRenderBackdrop && props?.onPressRenderBackdrop();
          }}
          disappearsOnIndex={-1}
          appearsOnIndex={2}
          opacity={1}
          enablePanDownToClose={true}
        enabledInnerScrolling={true}
        />
      ),
      [],
    );
    return (
      <BottomSheet
        ref={internalRef}
        index={-1}
        enablePanDownToClose={true}
        enabledContentGestureInteraction={true}
        backdropComponent={renderBackdrop}
        android_keyboardInputMode="adjustResize"
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        shouldMeasureContentHeight={true}
        handleComponent={null}
        backgroundComponent={() => <View style={{}}></View>}>
        <BottomSheetView onLayout={handleContentLayout}>
          <View style={styles.bottomSheetContainer}>{props.children}</View>
        </BottomSheetView>
      </BottomSheet>
    );
  });
  export default BottomSheetWrapper;

  const makeStyles = (theme) =>
    StyleSheet.create({
      bottomSheetContainer: {
        backgroundColor: theme.COLORS.white,
        // paddingHorizontal: normalize(23, 'width'),
        // paddingVertical: normalize(17, 'height'),
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      },
    });