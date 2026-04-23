// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::fs;
use tauri::AppHandle;
use tauri::Manager;

const SAVE_FILE_NAME: &str = "save.trk";

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .invoke_handler(tauri::generate_handler![get_sets, update_sets])
        .run(tauri::generate_context!())
        .expect("Failed to run Tauri");
}

#[tauri::command]
fn get_sets(app: AppHandle) -> Result<String, String> {
    let mut path = app.path().app_data_dir().map_err(|e| e.to_string())?;
    std::fs::create_dir_all(&path).map_err(|e| e.to_string())?;

    path.push(&SAVE_FILE_NAME);
    println!("Data file path: {:?}", path);

    if !path.exists() {
        let data = include_str!("base_data.json");
        fs::write(&path, data).map_err(|e| e.to_string())?;
    }

    let data = fs::read_to_string(&path).map_err(|e| e.to_string())?;
    Ok(data)
}

#[tauri::command]
fn update_sets(app: AppHandle, content: String) -> Result<String, String> {
    let mut path = app
        .path()
        .app_data_dir()
        .map_err(|e| e.to_string())?;
    
    path.push(&SAVE_FILE_NAME);
    fs::write(&path, content).expect("Unable to write file");
    Ok("File updated successfully".to_string())
}