import { useEffect, useState } from "react";

const API = "http://localhost:8085";

export default function AddProduct() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  // Preview the selected image.
  useEffect(() => {
    if (!image) {
      setPreview("");
      return;
    }

    const previewUrl = URL.createObjectURL(image);
    setPreview(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [image]);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!image) {
      setMessage("Please select an image.");
      return;
    }

    if (image.size > 5 * 1024 * 1024) {
      setMessage("Please select an image of 5 MB or smaller.");
      return;
    }

    const formData = new FormData(form);

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(`${API}/addWithImage`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(
          errorData?.detail ||
            errorData?.message ||
            `Could not save product (${response.status}).`
        );
      }

      await response.json();

      form.reset();
      setImage(null);
      setMessage("Product added successfully!");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-gray-300 p-3";

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-3xl font-semibold text-green-900">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl bg-white p-6 shadow"
      >
        <label className="block">
          Product name
          <input
            type="text"
            name="name"
            placeholder="Money Plant"
            required
            maxLength={255}
            className={inputClass}
          />
        </label>

        <label className="block">
          Price (₹)
          <input
            type="number"
            name="price"
            placeholder="199"
            min="0.01"
            step="0.01"
            required
            className={inputClass}
          />
        </label>

        <label className="block">
          Category
          <select
            name="categoryId"
            defaultValue=""
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="1">Foliage Plants</option>
            <option value="2">Flowering Plants</option>
            <option value="3">Succulents &amp; Cacti</option>
            <option value="4">Herbs &amp; Edible Greens</option>
            <option value="5">Fruit Plants</option>
            <option value="6">Climbers &amp; Vines</option>
          </select>
        </label>

        <label className="block">
  Placement
  <select
    name="placement"
    defaultValue=""
    required
    className={inputClass}
  >
    <option value="" disabled>Select placement</option>
    <option value="INDOOR">Indoor</option>
    <option value="OUTDOOR">Outdoor</option>
    <option value="BOTH">Both</option>
  </select>
</label>

<label className="block">
  Description
  <textarea
    name="description"
    rows={4}
    required
    placeholder="Describe the plant and its care requirements"
    className={inputClass}
  />
</label>

        <label className="block">
          Product image
          <input
            type="file"
            name="image"
            accept="image/jpeg,image/png"
            required
            onChange={(event) =>
              setImage(event.target.files?.[0] ?? null)
            }
            className={inputClass}
          />
          <span className="mt-1 block text-sm text-gray-500">
            JPG or PNG, maximum 5 MB.
          </span>
        </label>

        {preview && (
          <img
            src={preview}
            alt="Selected product preview"
            className="h-56 w-full rounded-lg object-contain"
          />
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-green-800 py-3
                     font-medium text-white hover:bg-green-900
                     disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Product"}
        </button>

        <p role="status">{message}</p>
      </form>
    </main>
  );
}