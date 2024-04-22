---
title: 初めてのトランザクション
slug: your-first-transaction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 初めてのトランザクション

このチュートリアルでは、Aptosブロックチェーンにトランザクションを生成して送信し、これらの送信されたトランザクションを検証する方法について説明します。 このチュートリアルで使用される `transfer-coin` の例は、Aptos SDK を使用して構築されています。

## ステップ 1: SDKを選択

以下のリストからご希望の SDK をインストールします。

- [TypeScript SDK](../sdks/ts-sdk/index.md)
- [Python SDK](../sdks/python-sdk.md)
- [Rust SDK](../sdks/rust-sdk.md)

***

## ステップ 2: サンプルを実行

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

`@aptos-labs/ts-sdk` リポジトリをクローンします。

```bash
git clone https://github.com/aptos-labs/aptos-ts-sdk.git
```

Typescript SDK examples ディレクトリに移動します。

```bash
cd aptos-ts-sdk/examples/typescript
```

必要な依存関係をインストールします。

```bash
pnpm install
pnpm build
```

[`transfer_coin`](https://github.com/aptos-labs/aptos-ts-sdk/blob/main/examples/typescript/transfer_coin.ts)サンプルを実行します。

```bash
pnpm run transfer_coin
```

  
  <TabItem value="python" label="Python">

`aptos-core` リポジトリをクローンします。

```bash
git clone https://github.com/aptos-labs/aptos-core.git
```

Python SDK ディレクトリに移動します。

```bash
cd aptos-core/ecosystem/python/sdk
```

必要な依存関係をインストールします。

```bash
curl -sSL https://install.python-poetry.org | python3
poetry install
```

[`transfer_coin`](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/python/sdk/examples/transfer_coin.py)サンプルを実行します。

```bash
poetry run python -m examples.transfer_coin
```

  
  <TabItem value="rust" label="Rust">

`aptos-core` リポジトリをクローンします。

```bash
git clone https://github.com/aptos-labs/aptos-core.git
```

Rust SDK ディレクトリに移動します。

```bash
cd aptos-core/sdk
```

[`transfer_coin`](https://github.com/aptos-labs/aptos-core/blob/main/sdk/examples/transfer-coin.rs)サンプルを実行します。

```bash
cargo run --example transfer-coin
```

  


***

## ステップ3：出力を理解する

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">
    上記コマンドを実行すると、以下のような出力が表示されます。

```yaml
=== Addresses ===

Alice's address is: 0xbd20517751571ba3fd06326c23761bc0bc69cf450898ffb43412fbe670c28806
Bob's address is: 0x8705f98a74f5efe17740276ed75031927402c3a965e10f2ee16cda46d99d8f7f

=== Initial Balances ===

Alice's balance is: 100000000
Bob's balance is: 0

=== Transfer 1000000 from Alice to Bob ===

Committed transaction: 0xc0d348afdfc34ae2c48971b253ece727cc9980dde182e2f2c42834552cbbf04c

=== Balances after transfer ===

Alice's balance is: 98899100
Bob's balance is: 1000000
```

上記の出力は、`transfer-coin`サンプルが次のステップを実行することを示しています。

- Aptos クライアントの初期化
- Alice と Bob の2つのアカウントの作成
- ファウセットからの Alice のアカウントへの資金の供給
- Alice から Bob への1,000,000コインの転送
- その転送により Alice がガス代1,100,900コインを負担

</TabItem>

  <TabItem value="python" label="Python">
    上記コマンドを実行すると、以下のような出力が表示されます。

```yaml
=== Addresses ===
Alice: 0xbd20517751571ba3fd06326c23761bc0bc69cf450898ffb43412fbe670c28806
Bob: 0x8705f98a74f5efe17740276ed75031927402c3a965e10f2ee16cda46d99d8f7f

=== Initial Balances ===
Alice: 100000000
Bob: 0

=== Intermediate Balances ===
Alice: 99944900
Bob: 1000

=== Final Balances ===
Alice: 99889800
Bob: 2000
```

上記の出力は、`transfer-coin`サンプルが次のステップを実行することを示しています。

- RESTとファウセットクライアントの初期化
- Alice と Bob の2つのアカウントの作成
- ファウセットからの Alice のアカウントへの資金の供給
- ファウセットからBob のアカウントを作成
- Alice から Bob へ1,000コインの転送
- その転送を行うために Alice が支払ったガス代54,100コイン
- Alice から Bob へもう1,000コインを転送
- その転送により Alice が追加のガス代54,100コインを負担

上記の手順を達成するために使用されるSDK機能の以下の手順をご覧ください。 </TabItem>

  <TabItem value="rust" label="Rust">
    上記コマンドを実行すると、以下のような出力が表示されます。

```yaml
=== Addresses ===
Alice: 0xbd20517751571ba3fd06326c23761bc0bc69cf450898ffb43412fbe670c28806
Bob: 0x8705f98a74f5efe17740276ed75031927402c3a965e10f2ee16cda46d99d8f7f

=== Initial Balances ===
Alice: 100000000
Bob: 0

=== Intermediate Balances ===
Alice: 99944900
Bob: 1000

=== Final Balances ===
Alice: 99889800
Bob: 2000
```

上記の出力は、`transfer-coin`サンプルが次のステップを実行することを示しています。

- RESTとファウセットクライアントの初期化
- Alice と Bob の2つのアカウントの作成
- ファウセットからの Alice のアカウントへの資金の供給
- ファウセットから Bob のアカウントを作成
- Alice から Bob へ1,000コインの転送
- その転送により Alice がガス代54,100コインを負担
- Alice から Bob へもう1,000コインを転送
- その転送により Alice が追加のガス代54,100コインを負担

上記の手順を達成するために使用されるSDK機能の以下の手順をご覧ください。 </TabItem> </Tabs>

***

## ステップ 4: SDK の詳細

`transfer-coin` サンプルのコードはヘルパー関数を使用して [REST API](https://aptos.dev/nodes/aptos-api-spec#/) とやり取りします。 このセクションでは、それぞれの呼び出しをレビューし、機能に関する洞察を提供します。

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

:::tip 完全なコードを見る
TypeScript版 [`transfer_coin`](https://github.com/aptos-labs/aptos-ts-sdk/blob/main/examples/typescript/transfer_coin.ts)を参照してください。
:::

:::tip 完全なコードを見る
Python版 [`transfer_coin`](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/python/sdk/examples/transfer_coin.py)を参照してください。
:::

:::tip 完全なコードを見る
Rust版 [`transfer_coin`](https://github.com/aptos-labs/aptos-core/blob/main/sdk/examples/transfer-coin.rs)を参照してください。
:::

***

### ステップ 4.1: クライアントの初期化

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

まず `transfer_coin`のサンプルでは Aptos クライアントを初期化します。

```ts
const APTOS_NETWORK: Network =
  NetworkToNetworkName[process.env.APTOS_NETWORK] || Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);
```

:::tip
デフォルトでは、Aptos クライアントは Aptos の devnet サービスを指します。 しかし、これは`network`入力引数でも設定することができます。
:::

  
  <TabItem value="python" label="Python">
  最初のステップでは、 `transfer-coin` サンプルはRESTクライアントとファウセットクライアントの両方を初期化します。

- REST クライアントは、REST API とやり取りします。
- ファウセットクライアントは、アカウントの作成と資金提供のためのdevnet Faucetサービスと相互作用します。

```python
:!: static/sdks/python/examples/transfer_coin.py section_1
```

[`common.py`](https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/python/sdk/examples/common.py) initializes these values as follows:

```python
:!: static/sdks/python/examples/common.py section_1
```

:::tip

デフォルトでは、両方のサービスの URL は Aptos devnet サービスを指します。 ただし、これらは以下の環境変数で設定できます。

- `APTOS_NODE_URL`

- `APTOS_FAUCET_URL`
  ::: </TabItem> <TabItem value="rust" label="Rust">
  最初のステップでは、 `transfer-coin` サンプルはRESTクライアントとファウセットクライアントの両方を初期化します。

- REST クライアントは、REST API とやり取りします。

- ファウセットクライアントは、アカウントの作成と資金提供のための devnet Faucet サービスとやりとりします。

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_1a
```

API クライアントを使用して、コインの転送や残高の確認などの一般的なコイン操作に使用する `CoinClient` を作成できます。

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_1b
```

この例では、URL の値を以下のように初期化します。

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_1c
```

:::tip

デフォルトでは、両方のサービスの URL は Aptos devnet サービスを指します。 ただし、これらは以下の環境変数で設定できます。

- `APTOS_NODE_URL`
- `APTOS_FAUCET_URL`
  ::: </TabItem> </Tabs>

***

### ステップ 4.2: ローカルアカウントの作成

The next step is to create two accounts locally. [Accounts](../concepts/accounts.md) represent both on and off-chain state. Off-chain state consists of an address and the public/private key pair used to authenticate ownership. This step demonstrates how to generate that off-chain state.

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

```ts
const alice = Account.generate();
const bob = Account.generate();
```

  
  <TabItem value="python" label="Python">

```python
:!: static/sdks/python/examples/transfer_coin.py section_2
```

  
  <TabItem value="rust" label="Rust">

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_2
```

  


***

### ステップ 4.3: ブロックチェーンアカウントの作成

Aptosでは、各アカウントはトークンとコインを受け取り、他のdappsとやり取りするためにオンチェーン上の表明が必要です。 アカウントは資産を保存するための媒体を表します; したがって、それは明示的に作成する必要があります。 この例では、Faucetを利用してAliceのアカウントを作成・資金を供給し、一方Bobのアカウントは作成のみ行い資金の供給はしません。

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

```ts
await aptos.fundAccount({
  accountAddress: alice.accountAddress,
  amount: 100_000_000,
});
```

  
  <TabItem value="python" label="Python">

```python
:!: static/sdks/python/examples/transfer_coin.py section_3
```

  
  <TabItem value="rust" label="Rust">

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_3
```

  


***

### ステップ 4.4: 残高の読み込み

このステップでは、SDK は単一の呼び出しをリソースへの問い合わせと、そのリソースからフィールドを読み込むプロセスに変換します。

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

```ts
const aliceBalance = await balance("Alice", alice.accountAddress);
const bobBalance = await balance("Bob", bob.accountAddress);
```

この裏では、`balance`関数は、インデクサーサービスに問い合わせて現在保存されている値を読み込むSDKの`getAccountAPTAmount`関数を使用しています。

```ts
const balance = async (
  name: string,
  accountAddress: AccountAddress,
): Promise<number> => {
  const amount = await aptos.getAccountAPTAmount({
    accountAddress,
  });
  console.log(`${name}'s balance is: ${amount}`);
  return amount;
};
```

  
  <TabItem value="python" label="Python">

```python
:!: static/sdks/python/examples/transfer_coin.py section_4
```

この裏では、SDKはAptosCoinのためにCoinStoreリソースをクエリし、現在保存されている値を読み込んでいます。

```python
def account_balance(self, account_address: str) -> int:
    """Returns the test coin balance associated with the account"""
    return self.account_resource(
        account_address, "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>"
    )["data"]["coin"]["value"]
```

  
  <TabItem value="rust" label="Rust">

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_4
```

この裏では、SDKはAptosCoinのためにCoinStoreリソースをクエリし、現在保存されている値を読み込んでいます。

```rust
let balance = self
    .get_account_resource(address, "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>")
    .await?;
```

  


***

### ステップ 4.5: 転送

前のステップと同様に、これはAliceからBobにコインを転送するトランザクションを構築するもう1つのヘルパーステップです。 SDK は、チェーンに対してシミュレートまたは送信できる `transferCoinTransaction` トランザクションを生成するためのヘルパー関数を提供します。 トランザクションがチェーンに送信されると、 API はトランザクションの状態を確認するために次のステップで使用できるトランザクションハッシュを返します。 Aptosブロックチェーンは、送信時に一握りの検証チェックを実行します。 それらのいずれかに失敗した場合、ユーザーにはエラーが返されます。 これらの検証は、トランザクション署名と未使用のシーケンス番号を使用し、適切なチェーンにトランザクションを送信します。 <Tabs groupId="sdk-examples"> <TabItem value="typescript" label="Typescript">

```ts
const transaction = await aptos.transferCoinTransaction({
  sender: alice,
  recipient: bob.accountAddress,
  amount: TRANSFER_AMOUNT,
});
const pendingTxn = await aptos.signAndSubmitTransaction({
  signer: alice,
  transaction,
});
```

このは裏で、 `transferCoinTransaction` 関数は、チェーンにシミュレートまたは送信できるトランザクションペイロードを生成しています。

```ts
export async function transferCoinTransaction(args: {
  aptosConfig: AptosConfig;
  sender: Account;
  recipient: AccountAddressInput;
  amount: AnyNumber;
  coinType?: MoveStructId;
  options?: InputGenerateTransactionOptions;
}): Promise<SingleSignerTransaction> {
  const { aptosConfig, sender, recipient, amount, coinType, options } = args;
  const coinStructType = coinType ?? APTOS_COIN;
  const transaction = await generateTransaction({
    aptosConfig,
    sender: sender.accountAddress,
    data: {
      function: "0x1::aptos_account::transfer_coins",
      typeArguments: [coinStructType],
      functionArguments: [recipient, amount],
    },
    options,
  });

  return transaction;
}
```

上記の概要:

1. `transfer_coins` は内部的には [Aptos Account Move モジュール](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/aptos_account.move#L92)の`EntryFunction` です。つまり、Moveのエントリ関数は直接呼び出せます。
2. Move の関数は aptos_account モジュール: `0x1::aptos_account` に保存されてます。
3. `transfer_coins` 関数は、[Coin Move module](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/coin.move) を使用します。
4. Coinモジュールは他のコインで使用できるため、`transferCoinTransaction` は転送するコインの種類を明示的に指定する必要があります。 `coinType` は指定されていない限りデフォルトでは `0x1::aptos_coin::AptosCoin` です。

  
  <TabItem value="python" label="Python">
前のステップと同様に、これはAliceからBobにコインを転送するトランザクションを構築するもう1つのヘルパーステップです。 正しく生成されたトランザクションの場合、API はトランザクションの状態を確認するために次のステップで使用できるトランザクションハッシュを返します。 Aptosブロックチェーンは、送信時に一握りの検証チェックを実行します。 それらのいずれかに失敗した場合、ユーザーにはエラーが返されます。 これらの検証は、トランザクション署名と未使用のシーケンス番号を使用し、適切なチェーンにトランザクションを送信します。

```python
:!: static/sdks/python/examples/transfer_coin.py section_5
```

裏では、Python SDK がトランザクションを生成、署名、送信します。

```python
:!: static/sdks/python/aptos_sdk/async_client.py bcs_transfer
```

上記の概要:

1. `transfer` は内部的には [Coin Move モジュール](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/coin.move#L412)の`EntryFunction` です。つまり、Moveのエントリ関数は直接呼び出せます。
2. Move関数はコインモジュール`0x1::coin`に保存されます。
3. Coinモジュールは他のコインで使用できるので、transfer には明示的にどのコインを転送するかを定義するために`TypeTag`を使用する必要があります。
4. トランザクション引数は型指定子 (`Serializer.{type}`) を持つ `TransactionArgument`に配置する必要があり、これはトランザクション生成時に適切な型に値をシリアライズされます。

  
  <TabItem value="rust" label="Rust">
前のステップと同様に、これはAliceからBobにコインを転送するトランザクションを構築するもう1つのヘルパーステップです。 正しく生成されたトランザクションの場合、API はトランザクションの状態を確認するために次のステップで使用できるトランザクションハッシュを返します。 Aptosブロックチェーンは、送信時に一握りの検証チェックを実行します。 それらのいずれかに失敗した場合、ユーザーにはエラーが返されます。 これらの検証は、トランザクション署名と未使用のシーケンス番号を使用し、適切なチェーンにトランザクションを送信します。

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_5
```

裏では、Rust SDK がトランザクションを生成、署名、送信します。

```rust
:!: static/sdks/rust/src/coin_client.rs section_1
```

上記の概要:

1. まず、トランザクションペイロードの構築に必要なチェーンIDを取得します。
2. `transfer` は内部的には [Coin Move モジュール](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/coin.move#L412)の`EntryFunction` です。つまり、Moveのエントリ関数は直接呼び出せます。
3. Move関数はコインモジュール`0x1::coin`に保存されます。
4. Coinモジュールは他のコインで使用できるので、transfer には明示的にどのコインを転送するかを定義するために`TypeTag`を使用する必要があります。
5. `to_account` や `amount` のようなトランザクション引数は、 `TransactionBuilder` で使用するにはBCSとしてエンコードする必要があります。

  


***

### ステップ 4.6: トランザクションの解決を待つ

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

TypeScript SDKでは、`waitForTransaction`を呼び出すだけでトランザクションが完了するまで待つことができます。 この関数は、処理が完了したら (それが成功か失敗かによらず) APIから返される `Transaction` を返却、もしくは処理がタイムアウトとなった場合はエラーを返します。

```ts
const response = await aptos.waitForTransaction({
  transactionHash: pendingTxn.hash,
});
```

  
  <TabItem value="python" label="Python">

トランザクションハッシュはトランザクションの状態を問い合わせるために使用できます:

```python
:!: static/sdks/python/examples/transfer_coin.py section_6
```

  
  <TabItem value="rust" label="Rust">

トランザクションハッシュはトランザクションの状態を問い合わせるために使用できます:

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_6
```

  


## 役に立つドキュメント

- [Account basics](../concepts/accounts.md)
- [TypeScript SDK](../sdks/ts-sdk/index.md)
- [Python SDK](../sdks/python-sdk.md)
- [Rust SDK](../sdks/rust-sdk.md)
- [REST API specification](https://aptos.dev/nodes/aptos-api-spec#/)
