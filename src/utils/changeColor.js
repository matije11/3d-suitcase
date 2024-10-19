export function changeColor(parts, materialOne) {
  window.Unlimited3D.changeMaterials({
    partObjects: [
      {
        parts: parts,
        material: materialOne,
      },
    ],
  });
}
