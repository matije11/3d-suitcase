export function changeColor(parts, material) {
  window.Unlimited3D.changeMaterials({
    partObjects: [
      {
        parts: parts,
        material: material,
      },
    ],
  });
}
