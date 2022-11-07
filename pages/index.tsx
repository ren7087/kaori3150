import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
	query GetUsers {
		users {
			id
			name
			email
		}
	}
`;

const Home: NextPage = () => {
	const { data, loading, error } = useQuery(GET_USERS);

	if (loading) return <p>ローディング中です</p>;
	if (error) return <p>エラーが発生しています</p>;

	const { users } = data;

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>ユーザ情報</h1>
				{users.map((user: { id: number; name: string; email: string }) => (
					<div key={user.id}>Name: {user.name}</div>
				))}
			</main>
		</div>
	);
};

export default Home;
