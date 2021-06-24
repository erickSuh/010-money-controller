import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';

import {Header} from '../components/Header';
import {Load} from '../components/Load';
import {ItemBilling} from '../components/ItemBilling';

import Api from '../server/api';

import invoiceImage from '../assets/invoice.png';
import calculatorImage from '../assets/calculator.png';
import {formatCurrency} from '../utils/number';
import colors from '../styles/colors';

interface PostProps {
  id: number;
  description: string;
  value: number;
}

export const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({target: 0, balance: 0});
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      const handleLoadUserInfo = async () => {
        const {data} = await Api.get('userInfo');
        setUserInfo(data);
      };
      handleLoadUserInfo();

      const handleLoadPosts = async () => {
        const {data} = await Api.get('posts');
        setPosts(data);

        setIsLoading(false);
      };
      handleLoadPosts();
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (isLoading) {
    return <Load />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.cardTitleContainer}>
            <Image style={styles.cardTitleImage} source={invoiceImage} />
            <Text style={styles.cardTitle}>Sua meta de gastos:</Text>
          </View>
          <Text style={styles.cardText}>{formatCurrency(userInfo.target)}</Text>

          <View style={styles.cardTitleContainer}>
            <Image style={styles.cardTitleImage} source={calculatorImage} />
            <Text style={styles.cardTitle}>Seu saldo:</Text>
          </View>
          <Text style={styles.cardText}>
            {formatCurrency(userInfo.balance)}
          </Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <ItemBilling data={item} handleRemove={() => null} />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    backgroundColor: colors.green,
    paddingHorizontal: 20,
    height: 220,
  },
  cardContainer: {
    width: '80%',
    borderRadius: 16,
    marginTop: -70,
    backgroundColor: colors.blue,
    height: 140,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  cardTitleContainer: {
    flexDirection: 'row',
  },
  cardTitleImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 20,
  },
  cardText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
});
