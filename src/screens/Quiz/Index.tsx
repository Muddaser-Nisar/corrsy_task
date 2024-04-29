import MainHeader from 'components/MainHeader';
import PrimaryButton from 'components/PrimaryButton';
import ScreenWrapper from 'layout/ScreenWrapper';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from 'utils/constants/colors';
import icons from 'utils/constants/icons';
import {quiz} from 'utils/constants/quizData';
const Index = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [backgroundColorOption, setBbackgroundColorOption] = useState<any>(
    colors.white,
  );

  const handleOptionSelect = optionId => {
    setSelectedOption(optionId);
    setIsCorrect(selectedOption === quiz[currentQuestionIndex].correctAnswer);
    setBbackgroundColorOption(colors.inActiveColor);
  };

  const handleCheckAnswer = () => {
    setBbackgroundColorOption(isCorrect ? colors.activeColor : colors.redColor);
    // Check if an option is selected
    if (selectedOption === null) {
      return;
    }

    // Check if the selected option is correct

    // Update the submitted state
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    // Reset the state for the next question
    setSelectedOption(null);
    setSubmitted(false);
    if (currentQuestionIndex != quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderOptions = () => {
    return quiz[currentQuestionIndex].options.map(option => (
      <TouchableOpacity
        key={option.optionId}
        style={[
          styles.optionButton,
          {
            backgroundColor:
              option.optionId == selectedOption
                ? backgroundColorOption
                : colors.white,
          },
        ]}
        onPress={() => handleOptionSelect(option.optionId)}>
        <Text>{option.optionText}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScreenWrapper>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{marginTop: heightPercentageToDP(2)}}
          onPress={() => navigation.goBack()}>
          <icons.backButton />
        </TouchableOpacity>
        <MainHeader title={'Quiz'} />
      </View>

      <View style={styles.quizContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {quiz[currentQuestionIndex].questionText}
          </Text>
          {renderOptions()}
        </View>
        <PrimaryButton
          onPress={submitted ? handleNextQuestion : handleCheckAnswer}
          title={submitted ? 'Next' : 'Check'}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  quizContainer: {
    marginTop: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: colors.inActiveColor,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
