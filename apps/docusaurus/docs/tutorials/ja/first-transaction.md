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

## Step 4: The SDK in depth

The `transfer-coin` example code uses helper functions to interact with the [REST API](https://aptos.dev/nodes/aptos-api-spec#/). This section reviews each of the calls and gives insights into functionality.

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

:::tip See the full code
See the TypeScript [`transfer_coin`](https://github.com/aptos-labs/aptos-ts-sdk/blob/main/examples/typescript/transfer_coin.ts) for the complete code as you follow the below steps.
:::

:::tip See the full code
See the Python [`transfer_coin`](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/python/sdk/examples/transfer_coin.py) for the complete code as you follow the below steps.
:::

:::tip See the full code
See the Rust [`transfer-coin`](https://github.com/aptos-labs/aptos-core/blob/main/sdk/examples/transfer-coin.rs) for the complete code as you follow the below steps.
:::

***

### Step 4.1: Initializing the clients

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

In the first step, the `transfer_coin` example initializes the Aptos client:

```ts
const APTOS_NETWORK: Network =
  NetworkToNetworkName[process.env.APTOS_NETWORK] || Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);
```

:::tip
By default, the Aptos client points to Aptos devnet services. However, it can be configured with the `network` input argument
:::

  
  <TabItem value="python" label="Python">
  In the first step, the `transfer-coin` example initializes both the REST and faucet clients:

- The REST client interacts with the REST API.
- The faucet client interacts with the devnet Faucet service for creating and funding accounts.

```python
:!: static/sdks/python/examples/transfer_coin.py section_1
```

[`common.py`](https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/python/sdk/examples/common.py) initializes these values as follows:

```python
:!: static/sdks/python/examples/common.py section_1
```

:::tip

By default, the URLs for both the services point to Aptos devnet services. However, they can be configured with the following environment variables:

- `APTOS_NODE_URL`

- `APTOS_FAUCET_URL`
  ::: </TabItem> <TabItem value="rust" label="Rust">
  In the first step, the `transfer-coin` example initializes both the REST and faucet clients:

- The REST client interacts with the REST API.

- The faucet client interacts with the devnet Faucet service for creating and funding accounts.

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_1a
```

Using the API client we can create a `CoinClient`, which we use for common coin operations such as transferring coins and checking balances.

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_1b
```

In the example we initialize the URL values as such:

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_1c
```

:::tip

By default, the URLs for both the services point to Aptos devnet services. However, they can be configured with the following environment variables:

- `APTOS_NODE_URL`
- `APTOS_FAUCET_URL`
  ::: </TabItem> </Tabs>

***

### Step 4.2: Creating local accounts

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

### Step 4.3: Creating blockchain accounts

In Aptos, each account must have an on-chain representation in order to receive tokens and coins and interact with other dapps. An account represents a medium for storing assets; hence, it must be explicitly created. This example leverages the Faucet to create and fund Alice's account and to create but not fund Bob's account:

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

### Step 4.4: Reading balances

In this step, the SDK translates a single call into the process of querying a resource and reading a field from that resource.

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

```ts
const aliceBalance = await balance("Alice", alice.accountAddress);
const bobBalance = await balance("Bob", bob.accountAddress);
```

Behind the scenes, the `balance` function uses the SDK `getAccountAPTAmount` function that queries the Indexer service and reads the current stored value:

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

Behind the scenes, the SDK queries the CoinStore resource for the AptosCoin and reads the current stored value:

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

Behind the scenes, the SDK queries the CoinStore resource for the AptosCoin and reads the current stored value:

```rust
let balance = self
    .get_account_resource(address, "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>")
    .await?;
```

  


***

### Step 4.5: Transferring

Like the previous step, this is another helper step that constructs a transaction transferring the coins from Alice to Bob. The SDK provides a helper function to generate a `transferCoinTransaction` transaction that can be simulated or submitted to chain. Once a transaction has been submitted to chain, the API will return a transaction hash that can be used in the subsequent step to check on the transaction status. The Aptos blockchain does perform a handful of validation checks on submission; and if any of those fail, the user will instead be given an error. These validations use the transaction signature and unused sequence number, and submitting the transaction to the appropriate chain. <Tabs groupId="sdk-examples"> <TabItem value="typescript" label="Typescript">

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

Behind the scenes, the `transferCoinTransaction` function generates a transaction payload that can be simulated or submitted to chain:

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

Breaking the above down into pieces:

1. `transfer_coins` internally is a `EntryFunction` in the [Aptos Account Move module](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/aptos_account.move#L92), i.e. an entry function in Move that is directly callable.
2. The Move function is stored on the aptos_account module: `0x1::aptos_account`.
3. The `transfer_coins` functions uses the [Coin Move module](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/coin.move)
4. Because the Coin module can be used by other coins, the `transferCoinTransaction` must explicitly specify which coin type to transfer. If not specified with `coinType` it defaults to `0x1::aptos_coin::AptosCoin`.

  
  <TabItem value="python" label="Python">
Like the previous step, this is another helper step that constructs a transaction transferring the coins from Alice to Bob. For correctly generated transactions, the API will return a transaction hash that can be used in the subsequent step to check on the transaction status. The Aptos blockchain does perform a handful of validation checks on submission; and if any of those fail, the user will instead be given an error. These validations use the transaction signature and unused sequence number, and submitting the transaction to the appropriate chain.

```python
:!: static/sdks/python/examples/transfer_coin.py section_5
```

Behind the scenes the Python SDK generates, signs, and submits a transaction:

```python
:!: static/sdks/python/aptos_sdk/async_client.py bcs_transfer
```

Breaking the above down into pieces:

1. `transfer` internally is a `EntryFunction` in the [Coin Move module](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/coin.move#L412), i.e. an entry function in Move that is directly callable.
2. The Move function is stored on the coin module: `0x1::coin`.
3. Because the Coin module can be used by other coins, the transfer must explicitly use a `TypeTag` to define which coin to transfer.
4. The transaction arguments must be placed into `TransactionArgument`s with type specifiers (`Serializer.{type}`), that will serialize the value into the appropriate type at transaction generation time.

  
  <TabItem value="rust" label="Rust">
Like the previous step, this is another helper step that constructs a transaction transferring the coins from Alice to Bob. For correctly generated transactions, the API will return a transaction hash that can be used in the subsequent step to check on the transaction status. The Aptos blockchain does perform a handful of validation checks on submission; and if any of those fail, the user will instead be given an error. These validations use the transaction signature and unused sequence number, and submitting the transaction to the appropriate chain.

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_5
```

Behind the scenes the Rust SDK generates, signs, and submits a transaction:

```rust
:!: static/sdks/rust/src/coin_client.rs section_1
```

Breaking the above down into pieces:

1. First, we fetch the chain ID, necessary for building the transaction payload.
2. `transfer` internally is a `EntryFunction` in the [Coin Move module](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/coin.move#L412), i.e. an entry function in Move that is directly callable.
3. The Move function is stored on the coin module: `0x1::coin`.
4. Because the Coin module can be used by other coins, the transfer must explicitly use a `TypeTag` to define which coin to transfer.
5. The transaction arguments, such as `to_account` and `amount`, must be encoded as BCS to use with the `TransactionBuilder`.

  


***

### Step 4.6: Waiting for transaction resolution

<Tabs groupId="sdk-examples">
  <TabItem value="typescript" label="Typescript">

In the TypeScript SDK, just calling `waitForTransaction` is sufficient to wait for the transaction to complete. The function will return the `Transaction` returned by the API once it is processed (either successfully or unsuccessfully) or throw an error if processing time exceeds the timeout.

```ts
const response = await aptos.waitForTransaction({
  transactionHash: pendingTxn.hash,
});
```

  
  <TabItem value="python" label="Python">

The transaction hash can be used to query the status of a transaction:

```python
:!: static/sdks/python/examples/transfer_coin.py section_6
```

  
  <TabItem value="rust" label="Rust">

The transaction hash can be used to query the status of a transaction:

```rust
:!: static/sdks/rust/examples/transfer-coin.rs section_6
```

  


## Supporting documentation

- [Account basics](../concepts/accounts.md)
- [TypeScript SDK](../sdks/ts-sdk/index.md)
- [Python SDK](../sdks/python-sdk.md)
- [Rust SDK](../sdks/rust-sdk.md)
- [REST API specification](https://aptos.dev/nodes/aptos-api-spec#/)
