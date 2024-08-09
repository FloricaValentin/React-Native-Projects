import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';

const ModalForm = ({ visible, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
      let valid = true;
      let errors = {};

      if (title.trim() === '') {
        errors.title = 'Title is required';
        valid = false;
      }
      if (rating.trim() === '' || isNaN(Number(rating))) {
        errors.rating = 'Valid rating is required';
        valid = false;
      }
      if (body.trim() === '') {
        errors.body = 'Body is required';
        valid = false;
      }

      setErrors(errors);
      return valid;
    };

    const handleSubmit = () => {
      if (validate()) {
        onSubmit({ title, rating: Number(rating), body });
        setTitle('');
        setRating('');
        setBody('');
        onClose();
      }
    };

    if (!visible) return null;

    return (
      <View style={styles.modalBackground}>
        <KeyboardAvoidingView
          style={styles.modalContainer}
        >
          <Text style={styles.modalTitle}>Enter Review</Text>

          <TextInput
            style={[styles.input, errors.title && styles.inputError]}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            autoFocus
          />
          {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

          <TextInput
            style={[styles.input, errors.rating && styles.inputError]}
            placeholder="Rating (numeric)"
            value={rating}
            onChangeText={setRating}
            keyboardType="numeric"
          />
          {errors.rating && <Text style={styles.errorText}>{errors.rating}</Text>}

          <TextInput
            style={[styles.input, errors.body && styles.inputError]}
            placeholder="Body"
            value={body}
            onChangeText={setBody}
            multiline
            numberOfLines={4}
          />
          {errors.body && <Text style={styles.errorText}>{errors.body}</Text>}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  };

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalForm;
