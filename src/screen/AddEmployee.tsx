import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color, font} from '../theme';
import {normalize, widthResponsive} from '../utils';
import {ms, mvs} from 'react-native-size-matters';
import {Button, Gap, InputText, TopNavigation} from '../components';
import {useCreateEmployeeHook} from '../hooks/use-createEmployee.hook';
import {createEmplyeeProps} from '../interface/createEmployee.interface';

type InputField =
  | 'firstName'
  | 'lastName'
  | 'companyName'
  | 'address'
  | 'city'
  | 'state'
  | 'country'
  | 'zip'
  | 'phone1'
  | 'phone2'
  | 'email'
  | 'web'
  | null;

const AddEmployee = () => {
  const {createSuccess, isLoading, isError, setIsError, onSubmitEmployee} =
    useCreateEmployeeHook();

  const defaultValue = {
    first_name: '',
    last_name: '',
    company_name: '',
    address: '',
    city: '',
    county: '',
    state: '',
    zip: '',
    phone1: '',
    phone2: '',
    email: '',
    web: '',
  };
  const [focusInput, setFocusInput] = useState<InputField>(null);
  const [formValues, setFormValues] =
    useState<createEmplyeeProps>(defaultValue);

  const handleFocusInput = (focus: InputField) => {
    setFocusInput(focus);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormValues(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onPressCreate = () => {
    onSubmitEmployee(formValues);
    setIsError(false);
  };

  useEffect(() => {
    if (isLoading) {
      setFormValues(defaultValue);
    }
  }, [isLoading]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TopNavigation.Type2
          title="Add Employee"
          itemStrokeColor={color.Neutral[10]}
        />
        {createSuccess && (
          <View>
            <Text style={styles.succesStyle}>Success Submit The Employee</Text>
            <Gap height={10} />
          </View>
        )}
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <View>
            <InputText
              value={formValues.first_name}
              onChangeText={value => handleInputChange('first_name', value)}
              placeholder={'First Name..'}
              onFocus={() => {
                handleFocusInput('firstName');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'firstName'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.last_name}
              onChangeText={value => handleInputChange('last_name', value)}
              placeholder={'Last Name..'}
              isError={false}
              errorMsg={''}
              onFocus={() => {
                handleFocusInput('lastName');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isFocus={focusInput === 'lastName'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.company_name}
              onChangeText={value => handleInputChange('company_name', value)}
              placeholder={'Company Name..'}
              onFocus={() => {
                handleFocusInput('companyName');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'companyName'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.address}
              onChangeText={value => handleInputChange('address', value)}
              placeholder={'Address..'}
              onFocus={() => {
                handleFocusInput('address');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'address'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.city}
              onChangeText={value => handleInputChange('city', value)}
              placeholder={'City..'}
              onFocus={() => {
                handleFocusInput('city');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'city'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.county}
              onChangeText={value => handleInputChange('county', value)}
              placeholder={'Country..'}
              onFocus={() => {
                handleFocusInput('country');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'country'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.state}
              onChangeText={value => handleInputChange('state', value)}
              placeholder={'State..'}
              onFocus={() => {
                handleFocusInput('state');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'state'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.zip.toString()}
              onChangeText={value => handleInputChange('zip', value)}
              placeholder={'Zip..'}
              onFocus={() => {
                handleFocusInput('zip');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'zip'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.phone1}
              onChangeText={value => handleInputChange('phone1', value)}
              placeholder={'Phone 1..'}
              onFocus={() => {
                handleFocusInput('phone1');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'phone1'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.phone2}
              onChangeText={value => handleInputChange('phone2', value)}
              placeholder={'Phone 2..'}
              onFocus={() => {
                handleFocusInput('phone2');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'phone2'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.email}
              onChangeText={value => handleInputChange('email', value)}
              placeholder={'Email..'}
              onFocus={() => {
                handleFocusInput('email');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'email'}
            />
            <Gap height={8} />

            <InputText
              value={formValues.web}
              onChangeText={value => handleInputChange('web', value)}
              placeholder={'Web..'}
              onFocus={() => {
                handleFocusInput('web');
              }}
              onBlur={() => {
                handleFocusInput(null);
              }}
              isError={false}
              errorMsg={''}
              isFocus={focusInput === 'web'}
            />
            <Gap height={12} />
          </View>
          {isError && (
            <>
              <Text style={{color: color.Error[500], fontSize: mvs(16)}}>
                Wrong Input Dude
              </Text>
              <Gap height={12} />
            </>
          )}
          <Button
            label={'Submit Employee'}
            textStyles={{fontSize: mvs(14)}}
            containerStyles={{width: '100%'}}
            onPress={onPressCreate}
            isLoading={isLoading}
          />
          <Gap height={30} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.Dark[600],
  },
  titleContainer: {
    marginTop: widthResponsive(20),
    marginBottom: widthResponsive(20),
  },
  titleStyle: {
    fontFamily: font.InterRegular,
    fontWeight: '600',
    fontSize: mvs(30),
    textAlign: 'center',
    color: color.Neutral[10],
  },
  body: {
    padding: widthResponsive(20),
  },
  wrapperLoginType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: widthResponsive(16),
  },
  verticalSeparatorLoginType: {
    width: ms(1),
    height: mvs(12),
    backgroundColor: color.Dark[500],
    marginLeft: ms(12),
    marginRight: ms(12),
  },
  loginTypeActive: {
    fontFamily: font.InterMedium,
    fontSize: mvs(12),
    color: color.Pink[200],
    fontWeight: '500',
  },
  loginTypeInactive: {
    fontFamily: font.InterRegular,
    fontSize: mvs(12),
    color: color.Neutral[10],
    fontWeight: '400',
  },
  forgotPassStyle: {
    color: color.Neutral[10],
    fontFamily: font.InterRegular,
    fontWeight: '400',
    fontSize: mvs(12),
  },
  descStyle: {
    color: color.Neutral[10],
    fontFamily: font.InterMedium,
    fontWeight: '500',
    fontSize: mvs(12),
    maxWidth: '80%',
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: color.Error[400],
    paddingVertical: mvs(16),
    paddingHorizontal: ms(12),
    borderRadius: 4,
    height: mvs(48),
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: mvs(22),
  },
  textStyle: {
    color: color.Neutral[10],
    fontFamily: font.InterRegular,
    fontWeight: '500',
    fontSize: normalize(13),
    lineHeight: mvs(15),
  },
  succesStyle: {
    color: color.Success[200],
    fontFamily: font.InterRegular,
    fontWeight: '500',
    fontSize: normalize(13),
    lineHeight: mvs(15),
    alignSelf: 'center',
  },
});
