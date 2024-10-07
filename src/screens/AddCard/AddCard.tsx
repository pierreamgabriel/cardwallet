import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {WalletTile} from '../../components/WalletTitle/WalletTitle';
import {CommonBackground} from '../../components/CommonBackground/CommonBackground';
import {TextInputWallet} from '../../components/TextInputWallet/TextInputWallet';
import CamerIcon from '../../assets/images/camera-icon.png';
import {ActionButton} from '../../components/ActionButton/ActionButton';
import {FormInput, validateFormData} from '../../helpers/validateFormData';
import {Format} from '../../helpers/formatData';
import {useDispatch} from 'react-redux';
import {AddCardAction} from '../../state/AddCard/AddCardActions';
import {Header} from '../../components/Header/Header';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import {styles} from './AddCardStyles';

const formInputInitial = {
  id: 'id',
  number: '',
  name: '',
  expiration: '',
  cvv: '',
};

export const AddCard = () => {
  const dispatch = useDispatch();
  const navigation = useAppNavigation();

  const [formInput, setFormInput] = useState<FormInput>(formInputInitial);

  const [inputError, setInputError] = useState({
    number: false,
    name: false,
    expiration: false,
    cvv: false,
  });

  const handleInputChange = (field: keyof FormInput, value: string) => {
    let formattedValue = value;

    if (field === 'number') {
      formattedValue = Format.formatCardNumber(value);
    } else if (field === 'expiration') {
      formattedValue = Format.formatExpirationDate(value);
    } else if (field === 'cvv') {
      formattedValue = Format.formatSecurityCode(value);
    }

    setFormInput(prevState => ({
      ...prevState,
      [field]: formattedValue,
    }));
  };

  const handleSubmit = () => {
    const isValid = validateFormData(formInput, setInputError);
    const generateUniqueId = () => {
      return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    };
    if (isValid) {
      const newCardEntry = {
        ...formInput,
        id: generateUniqueId(),
      };
      dispatch(AddCardAction(newCardEntry));
      navigation.navigate('ShowCard', {formInput: newCardEntry});
    }
  };

  const isButtonDisabled = (): boolean => {
    return Object.values(formInput).some(value => value.trim() === '');
  };

  useEffect(() => {
    setFormInput(formInputInitial);
  }, []);

  return (
    <CommonBackground>
      <Header title="cadastro" />
      <View style={styles.invisibleView} />
      <ScrollView contentContainerStyle={styles.container}>
        <WalletTile fromBottom />
        <View style={styles.inputsContainer}>
          <TextInputWallet
            label="numero do cartão"
            value={formInput.number}
            iconLeft={CamerIcon}
            onChangeText={value => handleInputChange('number', value)}
            error={inputError.number}
          />
          <TextInputWallet
            label="nome do titular do cartão"
            value={formInput.name}
            onChangeText={value => handleInputChange('name', value)}
            error={inputError.name}
          />
          <View style={styles.doubleInputContainer}>
            <TextInputWallet
              label="vencimento"
              value={formInput.expiration}
              width="90%"
              onChangeText={value => handleInputChange('expiration', value)}
              error={inputError.expiration}
              placeholder="00/00"
            />
            <TextInputWallet
              label="código de segurança"
              value={formInput.cvv}
              width="90%"
              onChangeText={value => handleInputChange('cvv', value)}
              error={inputError.cvv}
              placeholder="***"
              secureTextEntry
            />
          </View>
        </View>
        <ActionButton
          title="avançar"
          bgColor="#12C2E9"
          titleColor="#ffffff"
          onPress={handleSubmit}
          disabled={isButtonDisabled()}
        />
      </ScrollView>
    </CommonBackground>
  );
};
