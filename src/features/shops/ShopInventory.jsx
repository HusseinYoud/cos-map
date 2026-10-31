import { getShopInventory } from "../../domain/queries/shops";

export default function ShopInventory({ shop, items }) {
  const inventory = getShopInventory(shop, items);

  if (inventory.length === 0) {
    return <p>The inventory has not been added yet.</p>;
  }

  return (
    <table className="campaign-inventory">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>

      <tbody>
        {inventory.map(({ item, offer }) => (
          <tr key={item.id}>
            <td>
              <strong>{item.name}</strong>

              {item.description.summary && (
                <div>{item.description.summary}</div>
              )}

              {offer.note && <small>{offer.note}</small>}
            </td>

            <td>
              {offer.price.amount} {offer.price.currency}
            </td>

            <td>
              {offer.stock.mode === "tracked"
                ? offer.stock.quantity
                : "Not tracked"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}